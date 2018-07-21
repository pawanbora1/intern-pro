const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');
const cors = require('cors');
const passport = require('passport');

const { mongoose } = require('./db.js');
// const config = require('./config/database');
// mongoose.connect(config.database);
var employeeController = require('./controllers/employeeController.js');
const app = express();
const users = require('./routes/users');
const port=3000;
app.use(bodyParser.json());

app.use('/users',users);
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.get('/',(req,res)=>{
res.send('Hello i m in');
});
app.listen(port,() => {console.log('server started at port 3000')}); 
app.use('/employees',employeeController);