var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var mongodb = require('mongodb');
assert = require('assert');

//Create the App
var app = express();

var MongoClient = require('mongodb').MongoClient;

//Database handle
var db;

// Initialize connection to MongoDB once
MongoClient.connect("mongodb://localhost:27017/TownMap", function(err, database) {
  if(err) throw err;
  db = database;
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



//Default Request to show all pokemon
app.get('/', function(req, res) {
  var col = db.collection('Pokemon');
    // Get first two documents that match the query
    col.find().toArray(function (err, docs) {
      assert.equal(null, err);
      res.json(docs)
    });
});

//Post request to add a pokemon encoded in json format
app.post('/', function(req,res){
  var col = db.collection('Pokemon');

  col.insertOne(req.body, function(){
    res.send(req.body);
  });

});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
