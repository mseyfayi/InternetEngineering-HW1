const methodNotAllowed = require('./methodNotAllowed');

const polygon = require('../polygon').routes;
const point = require('../point').routes;

const appRouter = (app) => {
    const setRouters = (model) => model.forEach(route =>
        app.route(route.url)[route.method](route.handler) // add "rout.url" to routes with "route.method" as method and "route.handler" as controller
            .all(methodNotAllowed(route.method))          // handle 405 (Method not allowed)
    );

    setRouters(polygon);
    setRouters(point);

    // url not found 404
    app.all('*', (req, res) => {
        res.status(404).send('Url not found');
    });
};

module.exports = appRouter;