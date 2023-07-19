const router = require("express").Router();
const {
  addMessage,
  getAllMessages,
} = require("../controllers/messagesController");

router.post("/addMessage", addMessage);
router.post("/allMessages", getAllMessages);

module.exports = router;
