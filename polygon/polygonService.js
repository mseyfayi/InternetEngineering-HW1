const repository = require('./polygonRepository');
const validation = require('./polygonValidation');

const store = (data) => new Promise((resolve, reject) => {
    validation(data)
        .then(() =>
            repository
                .store(data)
                .then(resolve)
                .catch(error => reject({
                    message: error.message,
                })))
        .catch(error =>
            reject({
                status: 422,
                body: error
            }))
});

module.exports = {
    store
};