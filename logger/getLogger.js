const createLogger = require('./createLogger');
let logger;

module.exports = () => {
    if (!logger) {
        logger = createLogger();
    }

    return logger;
};