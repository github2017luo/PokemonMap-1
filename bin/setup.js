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
        { _id: 9, name: "blastoise", type:["water"]},
        { _id: 10, name: "caterpie", type:["bug"]},
            { _id: 11, name: "metapod", type:["bug"]},
            { _id: 12, name: "butterfree", type:["bug/flying"]},
            { _id: 13, name: "weedle", type:["bug/poison"]},
            { _id: 14, name: "kakuna", type:["bug/poison"]},
            { _id: 15, name: "beedrill", type:["bug/poison"]},
            { _id: 16, name: "pidgey", type:["normal/flying"]},
            { _id: 17, name: "pidgeotto", type:["normal/flying"]},
            { _id: 18, name: "pidgeot", type:["normal/flying"]},
            { _id: 19, name: "rattata", type:["normal"]},
            { _id: 20, name: "raticate", type:["normal"]},
            { _id: 21, name: "spearow", type:["normal/flying"]},
            { _id: 22, name: "fearow", type:["normal/flying"]},
            { _id: 23, name: "ekans", type:["poison"]},
            { _id: 24, name: "arbok", type:["poison"]},
            { _id: 25, name: "pikachu", type:["electric"]},
            { _id: 26, name: "raichu", type:["electric"]},
            { _id: 27, name: "sandshrew", type:["ground"]},
            { _id: 28, name: "sandlash", type:["ground"]},
            { _id: 29, name: "nidoran", type:["poison"]},
            { _id: 30, name: "nidorina", type:["poison"]},
            { _id: 31, name: "nidoqueen", type:["poison/ground"]},
            { _id: 32, name: "nidoran", type:["poison"]},
            { _id: 33, name: "nidorino", type:["poison"]},
            { _id: 34, name: "nidoking", type:["poison/ground"]},
            { _id: 35, name: "clefairy", type:["fairy"]},
            { _id: 36, name: "clefable", type:["fairy"]},
            { _id: 37, name: "vulpix", type:["fire"]},
            { _id: 38, name: "ninetales", type:["fires"]},
            { _id: 39, name: "jigglypuff", type:["normal/fairy"]},
            { _id: 40, name: "wigglypuff", type:["normal/fairy"]},
            { _id: 41, name: "zubat", type:["poison/flying"]},
            { _id: 42, name: "golbat", type:["poison/flying"]},
            { _id: 43, name: "oddish", type:["grass/poison"]},
            { _id: 44, name: "gloom", type:["grass/poison"]},
            { _id: 45, name: "vileplume", type:["grass/poison"]},
            { _id: 46, name: "paras", type:["bug/grass"]},
            { _id: 47, name: "parasect", type:["bug/grass"]},
            { _id: 48, name: "venonat", type:["bug/poison"]}



    ]
);

db.Sightings.drop();


//Breaks input
db.Sightings.createIndex({ location: "2dsphere" });