var express = require('express');
var path = require('path');
var mongodb = require('mongodb');
assert = require('assert');

//Create the App
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection to MongoDB once
MongoClient.connect("mongodb://localhost:27017/TownMap", function(err, database) {
  if(err) throw err;
  db = database;
});

//Default Request to show all pokemon
app.use('/', function(req, res, next) {

  var col = db.collection('Pokemon');

    // Get first two documents that match the query
    col.find().toArray(function (err, docs) {
      assert.equal(null, err);
      res.json(docs)
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
