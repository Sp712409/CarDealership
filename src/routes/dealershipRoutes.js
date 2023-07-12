// src/routes/dealershipRoutes.js
const express = require('express');
const carController = require('../controllers/carController');
const dealController = require('../controllers/dealController');

const router = express.Router();
//To view all cars.
router.get('/cars', carController.getAllCars);
//To view all cars sold by dealership

router.get('/cars/sold', carController.getSoldCarsByDealership);
// To add cars to dealership
router.post('/cars', carController.addCarToDealership);
//To view deals provided by dealership
router.get('/deals', dealController.getDealsByDealership);
//To add deals to dealership

router.post('/deals', dealController.addDealToDealership);
//To view all vehicles dealership has sold

router.get('/vehicles/sold', carController.getSoldVehiclesByDealership);
//To add new vehicle to the list of sold vehicles after a deal is made
router.post('/vehicles/sold', carController.addSoldVehicle);


module.exports = router;