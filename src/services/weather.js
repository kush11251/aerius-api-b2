const axios = require('axios');
const apiEndpoint = 'https://api.openweathermap.org/data/2.5/forecast';
const apiKey = 'YOUR_API_KEY';
const getForecast = async () => {
    try {
        const response = await axios.get(apiEndpoint, {
            params: {
                q: 'London',
                units: 'metric',
                appid: apiKey
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
module.exports = { getForecast };