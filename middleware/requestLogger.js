const logger = require('../logger');

module.exports = (req, res, next) => {
    const {body, query, params,path} = req;
    logger.log('info', `request: ${path}`, {body, query, params});
    next();
};