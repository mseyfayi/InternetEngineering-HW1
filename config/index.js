const features = require('../repository').read();

module.exports = () => {
    console.log("features:",features);
};