// load up
require('dotenv').config();
require('./config')();
const express = require('express');
const bodyParser = require('body-parser');
const setRoutes = require('./routes');

// create an instance of express to serve our end points
const app = express();
// load PORT from .env file
const port = process.env.PORT;

//adding middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//set routes
setRoutes(app);

const logger = require('./logger');

// launch our server
app.listen(port, () => {
    logger.log('info', `App is listening at ${port}`);
});