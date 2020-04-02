const service = require('./polygonService');

const polygonRoutes = (app) => {
    app.put('/gis/addpolygon', (req, res) => {
        const data = req.body;
        service
            .store(data)
            .then(data => res.status(200).send(`"${data.properties.name}" successfully added`))
            .catch(error => {
                const status = error.status || 500;
                const message = error.message||error;
                res.status(status).send(message)
            })
    });
};

module.exports = polygonRoutes;