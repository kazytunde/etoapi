const { User } = require("../../../models/user/user");
const jwt = require("jsonwebtoken");
const config = require("config");

describe("User model", () => {
  test("first name must be required", async () => {
    expect.assertions(1);

    try {
      await User.create({
        lastName: "Babatunde",
        email: "etotest@gmail.com",
        password: "12345"
      });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
  test("last name must be required", async () => {
    expect.assertions(1);

    try {
      await User.create({
        firstName: "Alaraje",
        email: "etotest@gmail.com",
        password: "12345"
      });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
  test("email must be required", async () => {
    expect.assertions(1);

    try {
      await User.create({
        lastName: "Alaraje",
        firstName: "Babatunde",
        password: "12345"
      });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test("password must be required", async () => {
    expect.assertions(1);

    try {
      await User.create({
        lastName: "Alaraje",
        firstName: "Babatunde",
        email: "etotest@gmail.com"
      });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test("email must be unique", async () => {
    expect.assertions(1);

    try {
      await User.init(); // wait for index to build
      await User.create([
        {
          lastName: "Alaraje",
          firstName: "Babatunde",
          email: "etotest@gmail.com",
          password: "12345"
        },
        {
          lastName: "Alaraje",
          firstName: "Babatunde",
          email: "etotest@gmail.com",
          password: "12345"
        }
      ]);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test("user role should be default to 'member'", async () => {
    const user = await User.create({
      lastName: "Alaraje",
      firstName: "Babatunde",
      email: "etotest@gmail.com",
      password: "12345"
    });

    expect(user.role).toBe("member");
  });

  test("should have correct fields", async () => {
    const {
      _id,
      __v,
      password,
      createdAt,
      updatedAt,
      ...user
    } = (await User.create({
      firstName: "Babatunde",
      lastName: "Alaraje",
      email: "etotest@gmail.com",
      password: "abc12345",
      phone: "9319143113",
      role: "admin"
    })).toObject();

    expect(user).toEqual({
      firstName: "Babatunde",
      lastName: "Alaraje",
      email: "etotest@gmail.com",
      phone: "9319143113",
      role: "admin"
    });
  });

  test("should be created with timestamps", async () => {
    const { createdAt, updatedAt } = (await User.create({
      firstName: "Babatunde",
      lastName: "Alaraje",
      email: "etotest@gmail.com",
      password: "abc12345",
      phone: "9319143113",
      role: "member"
    })).toObject();

    expect(createdAt).toBeDefined();
    expect(updatedAt).toBeDefined();
  });

  test("password should be hashed before save", async () => {
    const userPassword = "abc12345";

    const { password: hashPassword } = (await User.create({
      firstName: "Babatunde",
      lastName: "Alaraje",
      email: "etotest@gmail.com",
      password: userPassword
    })).toObject();

    expect(hashPassword).toBeDefined();
    expect(userPassword).not.toBe(hashPassword);
  });

  test("should checkPassword are same as the hash password", async () => {
    const userPassword = "abc12345";

    const user = await User.create({
      firstName: "Babatunde",
      lastName: "Alaraje",
      email: "etotest@gmail.com",
      password: userPassword
    });
    const isSamePassword = await user.checkPassword(userPassword);
    expect(isSamePassword).toBe(true);
  });

  test("should generateAuthToken for user login", async () => {
    const userPassword = "abc12345";

    const user = await User.create({
      firstName: "Babatunde",
      lastName: "Alaraje",
      email: "etotest@gmail.com",
      password: userPassword
    });

    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));

    expect(token).toBeDefined();
    expect(decoded).toBeDefined();
  });
});
