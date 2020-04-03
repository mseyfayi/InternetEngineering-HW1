const errors = require('./pointErrors');

module.exports = params=>new Promise((resolve,reject)=>{
    const rejectWithMessage = (message) => reject({message});
    if(!params.lat)
        rejectWithMessage(errors.missed('lat'));
    if (!params.long)
        rejectWithMessage(errors.missed('long'));

    const lat = Number(params.lat);
    const long = Number(params.long);
    if (Number.isNaN(lat))
        rejectWithMessage(errors.invalid('lat'));
    if (Number.isNaN(long))
        rejectWithMessage(errors.invalid('long'));

    resolve([lat, long]);
});