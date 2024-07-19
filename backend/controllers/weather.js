const WeatherReport = require('../models/WeatherReport');

exports.createWeatherReport = async (req, res) => {
    try {
        const weatherReport = new WeatherReport(req.body);
        await weatherReport.save();
        res.status(201).send(weatherReport);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getWeatherReports = async (req, res) => {
    try {
        const weatherReports = await WeatherReport.find();
        res.send(weatherReports);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getWeatherReport = async (req, res) => {
    try {
        console.log('getWeatherReport called with ID:', req.params.id); // Debug log
        const weatherReport = await WeatherReport.findById(req.params.id);
        if (!weatherReport) return res.status(404).send();
        res.send(weatherReport);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateWeatherReport = async (req, res) => {
    try {
        const weatherReport = await WeatherReport.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!weatherReport) return res.status(404).send();
        res.send(weatherReport);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteWeatherReport = async (req, res) => {
    try {
        const weatherReport = await WeatherReport.findByIdAndDelete(req.params.id);
        if (!weatherReport) return res.status(404).send();
        res.send({ message: "Delete successful" });
    } catch (error) {
        res.status(500).send(error);
    }
};