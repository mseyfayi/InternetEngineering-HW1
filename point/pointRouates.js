const controller = require('./pointController');

const testPoint = {
    url: '/gis/testpoint',
    handler: controller.testPoint,
    method: 'get'
};

module.exports = [testPoint];
