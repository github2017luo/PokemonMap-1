var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var GJV = require('geojson-validation');

var MongoClient = require('mongodb').MongoClient;

//Database handle
var db;
var pokemon;
var sightings;

// Initialize connection to MongoDB once
MongoClient.connect("mongodb://localhost:27017/TownMap", function(err, database) {
    if(err) throw err;
    db = database;
    pokemon = db.collection('Pokemon');
    sightings = db.collection('Sightings');
});

//Create the router
var pokeRouter = express.Router();

pokeRouter.use(bodyParser.json()); // support json encoded bodies
pokeRouter.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Default Request to show all pokemon
pokeRouter.get('/', function(req, res, next) {
    sightings.find().toArray(function (err, docs) {
        if (err) return next(err);

        res.json(docs)
    });
});

//Post request to add a pokemon sighting encoded in json format
pokeRouter.post('/', function(req,res,next){

    pokemon.find({name:req.body.name}, { _id: 1}).limit(1).next(function(err, doc){
        if (err) return next(err);

        if (!doc) {
            var err = new Error('Not a Pokemon');
            err.status = 400;
            return next(err);
        }

        if (!GJV.isPoint(req.body.location)){
            var err = new Error('Location is invalid GeoJSON Point');
            err.status = 400;
            return next(err);
        }

        sightings.insert({pokedex_id:doc._id, location:req.body.location}, function(err, result) {
            if (err) return next(err);
            
            res.json({message:"Sighting Registered"})

        });
    });

});

module.exports = pokeRouter;

