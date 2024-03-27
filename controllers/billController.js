

const Bill = require('../models/billSchema');
const Participant = require("../models/partispantsSchema")
exports.createBill = async (req, res) => {
    try {
        const newBill = await Bill.create(req.body);

        const totalAmount = newBill.totalAmount;
        const numberOfParticipants = newBill.participants.length;
        const splitAmount = totalAmount / numberOfParticipants;
        for (const participant of newBill.participants) {
            if (participant._id.toString() !== newBill.paidBy.toString()) {
                await Participant.findByIdAndUpdate(participant._id, { $inc: { due: splitAmount } });
            }
        }

        res.status(201).json(newBill);
    } catch (error) {
        console.error('Error creating bill and calculating split:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find({});
        res.json(bills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBillById = async (req, res) => {
    try {
        const bill = await Bill.findById(req.params.id);
        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.json(bill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBill = async (req, res) => {
    try {
        const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.json(bill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteBill = async (req, res) => {
    try {
        const bill = await Bill.findByIdAndDelete(req.params.id);
        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.json({ message: 'Bill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




