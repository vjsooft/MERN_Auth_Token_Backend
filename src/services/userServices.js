// const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const loginUser = async ({ email, password }) => {
  const matchUser = await User.findOne({ email });
  if (!matchUser) {
    throw new Error("User not found");
  }
  const isMatchPass = await bcrypt.compare(password, matchUser.password);
  if (!isMatchPass) {
    throw new Error("invalid password");
  }
  return matchUser;
};

const signupUser = async ({ name, email, mobNumber, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already registered plase login");
  }
  const hashPass = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    mobNumber,
    password: hashPass,
  });

  return user;
};

module.exports = signupUser;
