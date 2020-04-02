// load up
require('dotenv').config();
require('./config')();
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express to serve our end points
const app = express();
// load PORT from .env file
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes')(app);

// launch our server
app.listen(port, () => console.log(`App is listening at ${port}`));