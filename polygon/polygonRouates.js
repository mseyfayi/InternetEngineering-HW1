const data = require('../data');

const polygonRoutes = (app) => {
    app.put('/gis/addpolygon', (req, res) => {
        data.write(req.body).then(data => {
                res.status(200).send(`"${data.properties.name}" successfully added`);
            }
        );
    });
};

module.exports = polygonRoutes;