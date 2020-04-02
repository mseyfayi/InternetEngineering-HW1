const features = require('./getData')();
const fs = require('fs');

const write = (data) => {
    const featuresCollections = JSON.stringify({
        type: "FeatureCollection",
        features: [...features, data]
    });
    return new Promise((resolve, reject) => fs.writeFile(process.env.JSON_FILE_NAME, featuresCollections,{encoding:'utf8'}, error => {
        if (error) reject(error);
        else resolve(data);
    }));
};

module.exports = write;