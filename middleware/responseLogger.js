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

        try {
            const body = Buffer.concat(chunks).toString('utf8');

            const isSuccess = isInFamily(res, 200);
            const isInternalError = isInFamily(res, 500);

            const messageType = isSuccess ? 'response' : 'error';
            const logType = isInternalError ? 'error' : (isSuccess ? 'info' : 'warn');
            // console.log(err);
            logger.log(logType, `${messageType}: ${req.path} ${res.statusCode}`, {body});

            oldEnd.apply(res, arguments);
        } catch (e) {
            logger.log('error', 'cannot resolve response', e);
        }
    };

    next();
};

const t = {
    "code": "ERR_INVALID_ARG_TYPE",
    "level": "error",
    "message": "cannot resolve responseThe \"list[0]\" argument must be one of type Buffer or Uint8Array. Received type string",
    "stack": "TypeError [ERR_INVALID_ARG_TYPE]: The \"list[0]\" argument must be one of type Buffer or Uint8Array. Received type string\n    at Function.concat (buffer.js:538:13)\n    at ServerResponse.res.end (/home/mohamad/InternetEngineering/HW1/middleware/responseLogger.js:25:33)\n    at write (/home/mohamad/InternetEngineering/HW1/node_modules/finalhandler/index.js:297:9)\n    at send (/home/mohamad/InternetEngineering/HW1/node_modules/finalhandler/index.js:301:5)\n    at /home/mohamad/InternetEngineering/HW1/node_modules/finalhandler/index.js:133:5\n    at /home/mohamad/InternetEngineering/HW1/node_modules/express/lib/router/index.js:635:15\n    at next (/home/mohamad/InternetEngineering/HW1/node_modules/express/lib/router/index.js:260:14)\n    at next (/home/mohamad/InternetEngineering/HW1/node_modules/express/lib/router/route.js:127:14)\n    at Layer.handle_error (/home/mohamad/InternetEngineering/HW1/node_modules/express/lib/router/layer.js:67:12)\n    at next (/home/mohamad/InternetEngineering/HW1/node_modules/express/lib/router/route.js:135:13)",
    "timestamp": "2020-04-04 01:37:24"
}
