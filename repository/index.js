const fs = require('fs');
const logger = require('../logger');
const getDatabasePath = 'db.json';

let features;

/*
* If "features" has been set before returns that
* Otherwise tries to read "db.json" and save it in "features" if there was "db.json"
* Otherwise set [] in "features"
*/
const read = () => new Promise((resolve) => {
    if (features) {
        resolve(features);
    } else {
        try {
            fs.readFile(getDatabasePath, (error, rawData) => {
                if (!error) {
                    features = JSON.parse(rawData + '').features;
                    resolve(features);
                } else {
                    logger.log('error', 'read file crashed', error);
                    features = [];
                    resolve(features);
                }
            })
        } catch (e) {
            logger.log('error', 'read file crashed', e);
            features = [];
            resolve(features);
        }
    }
});

/*
* Gets features by calling read()
* Creates geojson in 'featuresCollections'
* Writes 'featuresCollections' in 'db.json'
* And changes the 'features'
*/
const write = (data) => new Promise((resolve, reject) => {
    read()
        .then(res => {
            // creating geojson
            const featuresCollections = JSON.stringify({
                type: "FeatureCollection",
                features: [...res, data]
            });

            // writing created geojson in 'db.json'
            fs.writeFile(getDatabasePath, featuresCollections, {encoding: 'utf8'}, error => {
                if (!error) {
                    // updating 'features'
                    features = [...res, data];
                    resolve(data);
                } else {
                    reject(error);
                }
            })
        })
        .catch(reject)
});

module.exports = {
    read,
    write
};
