const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    due: {
        type: Number,
        default: 0
    },
    isPaid: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Participant', participantSchema);
