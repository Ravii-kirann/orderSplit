// routes/billRoutes.js

const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

// Routes for bills
router.post('/bills', billController.createBill);
router.get('/bills', billController.getAllBills);
router.get('/bills/:id', billController.getBillById);
router.put('/bills/:id', billController.updateBill);
router.delete('/bills/:id', billController.deleteBill);

module.exports = router;
