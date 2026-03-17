const express = require('express');
const app = express();
const port = 3000;
const weatherController = require('./controllers/weather');
app.use(express.json());
app.get('/', (req, res) => res.send('Aerius API'));
app.use('/weather', weatherController);
app.listen(port, () => console.log(`Server listening on port ${port}`));