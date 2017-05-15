const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = parseInt(process.env.port, 10) || 4000;
const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());
//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next) {
  //console.log(err);
  res.status(422).send({error: err.message});
});

app.listen( port, function() {
  console.log('now listening for requests');
});
