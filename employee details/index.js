const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200/'}));

app.listen(4210, () => console.log('server started at port: 4210'));


//middleware funtion 
app.use('/employees', employeeController);
