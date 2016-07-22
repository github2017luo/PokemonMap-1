//
//Database setup file for testing and initial setup
//

//connect to the database


db.Pokemon.drop();

db.Pokemon.insert(
    [
        { _id: 1, name: "bulbasaur", type:["grass","poison"]},
        { _id: 2, name: "ivysaur", type:["grass","poison"] },
        { _id: 3, name: "venusaur", type:["grass","poison"]},
        { _id: 4, name: "charmander", type:["fire"]},
        { _id: 5, name: "charmeleon", type:["fire"]},
        { _id: 6, name: "charizard", type:["fire","flying"]},
        { _id: 7, name: "squirtle", type:["water"]},
        { _id: 8, name: "wartortle", type:["water"]},
        { _id: 9, name: "blastoise", type:["water"]}


    ]
);

db.Sightings.drop();


//Breaks input
db.Sightings.createIndex({ location: "2dsphere" });