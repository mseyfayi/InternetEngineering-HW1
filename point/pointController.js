const service = require('./pointService');

const testPoint = (req, res) => {
    const parameters = req.query;
    service
        .testPoint(parameters)
        .then(data => res.status(200).send(data))
        .catch(error => {
            const status = error.status || 500;
            const message = error.body || error;
            res.status(status).send(message)
        })

};
module.exports = {
    testPoint
};