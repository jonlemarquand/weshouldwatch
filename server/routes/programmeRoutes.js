const express = require('express');
const programmeController = require('./../controllers/programmeController');

const router = express.Router();

router.get('/api/programmes', programmeController.getProgammeList);

module.exports = router;
