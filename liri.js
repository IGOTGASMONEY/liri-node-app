require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var artist= process.argv.slice[2].join("+");
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";



// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.


  // concert-this, "node liri.js concert-this <artist/band name here>"
​
  // spotify-this-song, "node liri.js spotify-this-song <song name here>"
    // if no song is provided, default to "The Sign" -- HINT: use a SWITCH case statement
​
  // movie-this, "node liri.js movie-this <movie name here>"
    // if user doesn't type a movie in, default output data for the movie "Mr. Nobody"
    // HINT: use axios package to retrieve data from the OMDB API
​
  // do-what-it-says, "node liri.js do-what-it-says"
    // this command should run spotify-this-song for "I Want it That Way" in random.txt  
    // HINT: use the fs Node package to take in text inside of random.txt file

api key spotify : eb247d755dcc4ea28b19ac24af53cdcd