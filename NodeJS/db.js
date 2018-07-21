const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud2',(err)=>
{
    if(!err)
        console.log('MongooDB conncetion succeeded.');
    
    else
        console.log('Error in DB connection: ', JSON.stringify(err,undefined,2));
    
});
module.exports = mongoose;