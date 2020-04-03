const repository = require('./pointRepository');
const validation = require('./pointValidation');
const transformer = require('./testPointTransformer');
const inside = require('point-in-polygon');

const getNameOfPolygonsWithThePoint = (point) => new Promise((resolve, reject) => {
    repository
        .getPolygons()
        .then(allPolygons =>
            resolve(allPolygons
                .filter(polygon => inside(point, polygon.geometry.coordinates[0]))
                .map(polygon => polygon.properties.name)
            ))
        .catch(reject)
});

const testPoint = (params) => new Promise((resolve, reject) => {
    validation(params)
        .then(getNameOfPolygonsWithThePoint)
        .then(transformer)
        .then(resolve)
        .catch(error =>
            reject({
                status: 422,
                body: error
            }));
});

module.exports = {
    testPoint
};