require('dotenv').config();
const fs = require('fs');
const getDatabasePath = require('./getDatabasePath');

let features;

module.exports = () => {
    if (features) {
        return features;
    }

    try {
        const rawData = fs.readFileSync(getDatabasePath);
        features = JSON.parse(rawData + '').features;
    } catch (e) {
        //todo log this
    }

    return features || [];
};