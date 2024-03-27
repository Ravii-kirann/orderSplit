const mongoose = require('mongoose');
const Participant = require("./partispantsSchema")

const billSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalAmount: Number,
    paidBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Participant',
        required:true
    }, // Reference to the participant who paid the bill
    isPaid: {
        type: Boolean,
        default: false // Default value indicating the bill is not fully paid
    },
    participants: [Participant.schema]
});


