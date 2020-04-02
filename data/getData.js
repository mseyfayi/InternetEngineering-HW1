require('dotenv').config();
const fs = require('fs');

let features;

module.exports = () => {
    if (features) {
        return features;
    }

    const rawData = fs.readFileSync(process.env.JSON_FILE_NAME);
    try {
        features = JSON.parse(rawData).features;
    } catch (e) {
        features = [];
    }

    return features;
};