# Town Map Web Service
---- 
### Usage
- Search for sightings of Pokemon near a position
> BASEURL/sightings/@longitude,latitude(,distance)(,pokemon) 
 - Add a Pokemon sighting with a post request
> BASEURL/add-sighting/
The post body must be in JSON form
_Example_
	{
	    "name": "charizard",
	    "location": 
	    {
	        "type": "Point",
	        "coordinates": [-118.4955084, 34.0175467] 
	    }
	}
---- 
### Setup
1. Clone git repository
2. Open Project
3. run “npm install” from command line
4. “npm run-script setup” will setup a default TownMap database in MongoDB with all 151 pokemon
5. “npm start” should run the program

---- 
### Todo
- Store locations in barebones MongoDB ✅
- Create get and post routes for storing and retrieving pokemon by type
- Create get and post routes for storing and retrieving pokemon by radius
- Add Timestamps for sorting by time
- Device/user tracking (for shit-heads)
- User accounts