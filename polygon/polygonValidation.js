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

module.exports = data=>new Promise((resolve,reject)=>{
    isFeature(data)
        .then(()=>hasName(data))
        .then(resolve)
        .catch(reject)
});