const methodNotAllowed = (method) => (req, res) => {
    console.log(req.method);
    res.set('Allow', method.toUpperCase());
    res.status(405);
    res.send('Method Not Allowed');
};

const polygon = require('../polygon').routes;
const point = require('../point').routes;

const appRouter = (app) => {
    const setRouters = (model) => model.forEach(route =>
        app.route(route.url)[route.method](route.handler) // add "rout.url" to routes with "route.method" as method and "route.handler" as controller
            .all(methodNotAllowed(route.method))          // handle 405 (Method not allowed)
    );

    setRouters(polygon);
    setRouters(point);
};

module.exports = appRouter;