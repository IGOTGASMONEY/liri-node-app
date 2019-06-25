require("dotenv").config();
var axios = require("axios")
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var queryUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";


var command = process.argv[2]; 
var search = process.argv.slice(3).join("+");

console.log(process.argv[3])
console.log(search)
console.log(command)

function concertThis(uInput) {
    axios.get("https://rest.bandsintown.com/artists/" + uInput + "/events?app_id=codingbootcamp").then(
        function(response) {
            // Then we print out the artist information
            console.log(response.data[0]);
            
        }
    
);

    }

function switchCase(op, ui) {
switch(op) {
    case "concert-this":
        concertThis(ui);
        break;
    case "movie-this":
        movieThis(ui);
        break
        case "spotify-this-song":
            spotifyThis(ui);
            break
            case "do-what-it-says":
                doIt(ui);
                break
            
};
}

switchCase(command, search)



