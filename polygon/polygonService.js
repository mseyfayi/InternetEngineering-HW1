const repository = require('../repository');

const store = (data) => new Promise((resolve, reject) => {
    //todo validation
    repository
        .write(data)
        .then(resolve)
        .catch(reject);
});

module.exports = {
    store
};