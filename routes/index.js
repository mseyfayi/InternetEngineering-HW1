const polygonRoutes = require('../polygon').routes;
const pointRoutes = require('../point').routes;
const appRouter = (app) => {
    polygonRoutes(app);
    pointRoutes(app);
};

module.exports = appRouter;