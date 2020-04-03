require('dotenv').config();
require('./config')();
const express = require('express');
const setRoutes = require('./routes');
const {setPreMiddleware,setPostMiddleware} = require('./middleware');

const app = express();
const port = process.env.PORT;

setPreMiddleware(app);
setRoutes(app);
setPostMiddleware(app);

app.listen(port);