const controller = require('./polygonController');

const addPoint = {
    url: '/gis/addpolygon',
    handler: controller.addPolygon,
    method: 'put'
};

module.exports = [addPoint];