const mongoose = require('mongoose');

const weatherReportSchema = new mongoose.Schema({
    city: { type: String, required: true },
    country: { type: String, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    condition: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WeatherReport', weatherReportSchema);