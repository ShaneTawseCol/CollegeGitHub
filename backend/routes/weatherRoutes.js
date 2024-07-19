const express = require('express');
const router = express.Router();
const { createWeatherReport, getWeatherReports, getWeatherReport, updateWeatherReport, deleteWeatherReport } = require('../controllers/weather');

// Define routes
router.post('/', createWeatherReport);
router.get('/', getWeatherReports);
router.get('/:id', getWeatherReport);
router.put('/:id', updateWeatherReport);
router.delete('/:id', deleteWeatherReport);

module.exports = router;