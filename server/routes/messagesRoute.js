const router = require("express").Router();
const {
  addMessage,
  getAllMessages,
} = require("../controllers/messagesController");

router.post("/addMessage", addMessage);
router.get("/allMessages", getAllMessages);

module.exports = router;
