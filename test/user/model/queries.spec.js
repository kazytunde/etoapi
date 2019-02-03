const {
  findUserByEmail,
  findUserById,
  addUser
} = require("../../../models/user/queries");
const { User } = require("../../../models/user/user");
const mongoose = require("mongoose");

describe("user queries", () => {
  describe("addUser", () => {
    test("add new user", async () => {
      const email = "etotest@gmail.com";
      const user = {
        firstName: "Babatunde",
        lastName: "Alaraje",
        email: email,
        password: "userPassword"
      };

      const createdUser = await addUser(user);
      expect(createdUser).toBeDefined();
      expect(createdUser.email).toBe(email);
    });
  });

  describe("findUserById", () => {
    test("find user by id", async () => {
      const user = await User.create({
        lastName: "Alaraje",
        firstName: "Babatunde",
        email: "etotest@gmail.com",
        password: "12345"
      });

      const userId = user.id;

      const foundUser = await findUserById(userId);

      expect(foundUser).toBeDefined();
      expect(foundUser.id.toString()).toBe(userId.toString());
    });
  });

  describe("findUserByEmail", () => {
    test("find user by email", async () => {
      const email = "etotest@gmail.com";
      const user = await User.create({
        lastName: "Alaraje",
        firstName: "Babatunde",
        password: "12345",
        email
      });

      const foundUser = await findUserByEmail(email);
      expect(foundUser).toBeDefined();
      expect(foundUser.email).toBe(email);
    });
  });

  describe("updateUser", () => {
    test("update user", async () => {
      const email = "etotest@gmail.com";
      const user = await User.create({
        lastName: "Alaraje",
        firstName: "Babatunde",
        password: "12345",
        email
      });

      const foundUser = await findUserByEmail(email);
      expect(foundUser).toBeDefined();
      expect(foundUser.email).toBe(email);
    });
  });
});
