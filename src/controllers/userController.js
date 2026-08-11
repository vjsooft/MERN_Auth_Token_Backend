// const User = require("../models/userModel");
const signupUser = require('../services/userServices');

const userLogin = async (req, res) => {
  try {
    const userLogin = await User.loginUser(req.body);
    res.status(200).json({
      message: "User login successfully",
    });
  } catch (err) {}
};
const userRegister = async (req, res) => {
  try {
    const user = await signupUser(req.body)
    const {password, ...userData} = user.toObject();
    // const { name, email, mobNumber, password } = req.body;
    // const existingUser = await User.findOne({ email});
    // if (existingUser) {
    //   return res.status(400).json({
    //     message: "User already registered plase login",
    //   });
    // }
    // const user = await User.create({ name, email, mobNumber, password });
    res.status(200).json({
      message: "User Register successfully",
      user: userData,
    });
  } catch (error) {
    res.status(500).json({
      message: "User Register failed",
      error: error.message,
    });
  }
};
module.exports = { userLogin, userRegister };
