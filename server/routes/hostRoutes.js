const express = require('express');
const roomController = require('./../controllers/roomController');

const router = express.Router();

router.post('/api/newroom', roomController.newRoom);
router.post('/api/joinroom', roomController.joinRoom);

module.exports = router;
