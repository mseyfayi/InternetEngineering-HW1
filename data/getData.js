require('dotenv').config();
const fs = require('fs');

let features;

module.exports = () => {
    if (features) {
        return features;
    }

    try {
        const rawData = fs.readFileSync(process.env.JSON_FILE_NAME);
        features = JSON.parse(rawData).features;
    } catch (e) {
        //todo log this
    }

    return features||[];
};