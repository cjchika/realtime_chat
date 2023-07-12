const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const isValidUsername = await User.findOne({ username });
    if (isValidUsername) {
      return res.json({ msg: "Username already used", status: false });
    }
    const isValidEmail = await User.findOne({ email });
    if (isValidEmail) {
      return res.json({ msg: "Email already used", status: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};
