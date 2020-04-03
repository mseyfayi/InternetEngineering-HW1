const bodyParser = require('body-parser');
const requestLogger = require('./requestLogger');
const responseLogger = require('./responseLogger');

module.exports = (app)=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(requestLogger);
    app.use(responseLogger);
};