const logger = require('../logger');

module.exports = (req, res, next) => {
    const {body, query, params, path, method} = req;
    logger.log('info', `request: ${path} ${method}`, {body, query, params});
    next();
};