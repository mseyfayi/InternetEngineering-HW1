const repository = require('./polygonRepository');

const store = (data) => new Promise((resolve, reject) => {
    //todo validation

    repository
        .store(data)
        .then(resolve)
        .catch(error=> {
            console.log('error',error);
            return reject(error);
        });
});

module.exports = {
    store
};