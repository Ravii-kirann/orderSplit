const Participant = require('../models/partispantsSchema');

exports.createParticipant = async (req, res) => {
    try {
        const { name } = req.body;
        const newParticipant = await Participant.create({ name });
        res.status(201).json(newParticipant);
    } catch (error) {
        console.error('Error creating participant:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllParticipants = async (req, res) => {
    try {
        const participants = await Participant.find();
        res.status(200).json(participants);
    } catch (error) {
        console.error('Error getting participants:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
