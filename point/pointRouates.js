const controller = require('./pointController');

const pointRoutes = (app) => {
    app.get('/gis/testpoint', controller.testPoint);
};

module.exports = pointRoutes;