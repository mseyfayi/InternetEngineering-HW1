const logger = require('../logger');

function isInFamily(res, code) {
    let number = res.statusCode - code;
    return number < 100 && number >= 0;
}

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

        const isSuccess = isInFamily(res, 200);
        const isInternalError = isInFamily(res, 500);

        const messageType = isSuccess ? 'response' : 'error';
        const logType = isInternalError ? 'error' : (isSuccess ? 'info' : 'warn');

        logger.log(logType, `${messageType}: ${req.path} ${res.statusCode}`, {body});

        oldEnd.apply(res, arguments);
    };

    next();
};