const repository = require('../repository');

const getPolygons = () => new Promise((resolve, reject) => {
        repository
            .read()
            .then(polygons => polygons.filter(feature => feature.geometry.type === "Polygon"))
            .then(resolve)
            .catch(reject);
});

module.exports = {
    getPolygons
};