const GJV = require('geojson-validation');
const errors = require('./polygonErrors');

const hasName = data => new Promise((resolve, reject) => {
    if (data.properties.name)
        resolve();
    else
        reject({
            message: errors.hasNoName
        })
});

const isPolygon = (data) => new Promise((resolve, reject) => {
    try {
        GJV.isPolygon(data, (valid, error) => {
            if (valid)
                resolve();
            else
                reject({
                    message: errors.invalidPolygon,
                    data: error
                });
        })
    } catch (error) {
        reject({
            message: errors.invalidPolygon,
            data: error
        });
    }
});


const isFeature = (data) => new Promise((resolve, reject) => {
    try {
        GJV.isFeature(data, (valid, error) => {
            if (valid)
                resolve();
            else
                reject({
                    message: errors.invalidFeature,
                    data: error
                });
        })
    } catch (error) {
        reject({
            message: errors.invalidFeature,
            data: error
        });
    }
});

module.exports = data => new Promise((resolve, reject) => {
    if (!data.geometry)
        reject({
            message: errors.invalidFeature,
        });
    else
        isPolygon(data.geometry)
            .then(() => hasName(data))
            .then(() => isFeature(data))
            .then(resolve)
            .catch(reject)
});