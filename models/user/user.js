const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi); // To validate mongodb ObjectId coming from the request
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

const roles = {
  member: "member",
  superUser: "superUser",
  admin: "admin"
};

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      trim: true
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    phone: {
      type: String,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
    },
    role: {
      type: String,
      enum: Object.keys(roles),
      required: true,
      default: roles.member
    }
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function() {
  const fullname = `${this.firstName} ${this.lastName}`;

  const userDetail = {
    fullname,
    id: this._id,
    email: this.email,
    phone: this.phone,
    role: this.role
  };

  const token = jwt.sign(userDetail, config.get("jwtPrivateKey"));
  return token;
};

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
};

const User = mongoose.model("User", userSchema);

const validate = user => {
  const schema = {
    firstName: Joi.string()
      .min(5)
      .max(255)
      .required(),
    lastName: Joi.string()
      .min(5)
      .max(255)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
};

module.exports = { User, validate };
