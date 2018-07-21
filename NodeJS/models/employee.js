const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    id: { type:Number },
    name: { type: String},
    position: { type: String},
    office: { type: String},
    salary : { type: Number}
});
module.exports = { Employee };