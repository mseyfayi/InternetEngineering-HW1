const logger = require('../logger');

module.exports = (req, res, next) => {
    const oldWrite = res.write,
        oldEnd = res.end;

    const chunks = [];

    res.write = function (chunk) {
        chunks.push(chunk);

        oldWrite.apply(res, arguments);
    };

    res.end = function (chunk) {
        if (chunk)
            chunks.push(chunk);

        const body = Buffer.concat(chunks).toString('utf8');
        logger.log('info', `response: ${req.path}`, {body});


        oldEnd.apply(res, arguments);
    };

    next();};