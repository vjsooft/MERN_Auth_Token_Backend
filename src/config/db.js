const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("server connect successfully");
  } catch (err) {
    console.log("Server not connected", err);
  }
};

module.exports = connectDB;
