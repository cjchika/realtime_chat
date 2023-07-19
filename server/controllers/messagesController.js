const Messages = require("../models/messageModel.js");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) {
      return res.json({ msg: "Messages added successfully." });
    }

    return res.json({ msg: "Failed to add message to the database." });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllMessages = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
