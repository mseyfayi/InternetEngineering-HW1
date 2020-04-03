const bodyParser = require('body-parser');
const requestLogger = require('./requestLogger');
const responseLogger = require('./responseLogger');

const setPreMiddleware = (app)=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(requestLogger);
    app.use(responseLogger);
};
const setPostMiddleware = (app)=>{
    app.use(responseLogger);
};
module.exports = {
    setPreMiddleware,
    setPostMiddleware
};