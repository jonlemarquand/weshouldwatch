const express = require("express");
const { createRoom } = require("../controllers/roomController");
const router = express.Router();
router.post("/room", createRoom);
module.exports = router;
