const service = require('./polygonService');

const addPolygon = (req, res) => {
    const data = req.body;
    service
        .store(data)
        .then(data => res.status(200).send({message: `'${data.properties.name}' successfully added`}))
        .catch(error => {
            const status = error.status || 500;
            const message = error.body || error;
            res.status(status).send(message)
        })
};
module.exports = {
    addPolygon
};