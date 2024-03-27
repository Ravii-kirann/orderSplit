const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');

router.post('/participants', participantController.createParticipant);

router.get('/participants', participantController.getAllParticipants);

module.exports = router;
