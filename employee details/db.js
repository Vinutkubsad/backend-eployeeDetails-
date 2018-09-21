const mongoose = require('mongoose');

mongoose.connect ('mongodb://localhost:27017/CrudDb', (err) => {
    if(!err)
        console.log('Connection Succeeded.');
    else
        console.log('DB connection failed : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

