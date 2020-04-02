const controller = require('./polygonController');

const polygonRoutes = (app) => {
    app.put('/gis/addpolygon', controller.addPolygon);
};

module.exports = polygonRoutes;