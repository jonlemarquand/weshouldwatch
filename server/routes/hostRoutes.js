const express = require('express');
const roomController = require('./../controllers/roomController');

const router = express.Router();

router.post('/api/newroom', roomController.newRoom);

module.exports = router;
