const express = require('express');
const router = express.Router();
const weatherService = require('../services/weather');
router.get('/forecast', async (req, res) => {
    try {
        const forecast = await weatherService.getForecast();
        res.json(forecast);
    } catch (error) {
        res.status(500).send('Failed to retrieve forecast');
    }
});
module.exports = router;