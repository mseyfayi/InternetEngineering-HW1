const polygonRoutes = require('../polygon').routes;
const appRouter = (app) => {
    polygonRoutes(app);
};

module.exports = appRouter;