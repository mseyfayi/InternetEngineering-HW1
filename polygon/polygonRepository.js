const repository = require('../repository');

const store = (data) => new Promise((resolve, reject) => {
    repository
        .write(data)
        .then(resolve)
        .catch(reject);
});

module.exports = {
    store
};