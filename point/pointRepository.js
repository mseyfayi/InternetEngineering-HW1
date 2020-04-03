const repository = require('../repository');

const getPolygons = () => new Promise((resolve, reject) => {
    try {
        const polygons = repository.read().filter(feature => feature.geometry.type === "Polygon");
        resolve(polygons);
    }catch (e) {
        reject(e);
    }
});

module.exports = {
    getPolygons
};