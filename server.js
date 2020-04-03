require('dotenv').config();
require('./config')();
const express = require('express');
const setRoutes = require('./routes');
const setMiddleware = require('./middleware');

const app = express();
const port = process.env.PORT;

setMiddleware(app);
setRoutes(app);

app.listen(port);