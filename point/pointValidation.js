const errors = require('./pointErrors');

module.exports = params=>new Promise((resolve,reject)=>{
    if(!params.lat)
        reject(errors.missed('lat'));
    if (!params.long)
        reject(errors.missed('long'));

    const lat = Number(params.lat);
    const long = Number(params.long);
    if (Number.isNaN(lat))
        reject(errors.invalid('lat'));
    if (Number.isNaN(long))
        reject(errors.invalid('long'));

    resolve([lat, long]);
});