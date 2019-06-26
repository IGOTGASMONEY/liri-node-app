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
        function (response) {
            // Then we print out the artist information
            console.log(response.data[0]);

        }

    );

}

function movieThis(uInput) {

}



//     * Artist(s)

//     * The song's name

//     * A preview link of the song from Spotify

//     * The album that the song is from

//   * If no song is provided then your program will default to "The Sign" by Ace of Base.




function spotifyThis(uInput) {
    var queryUrl = "https://api.spotify.com/v1/search?q=" + uInput + "&type=track&market=us&limit=10&offset=5";
    
    spotify.get("https://api.spotify.com/v1/search?q=" + uInput + "&type=track&market=us&limit=10&offset=5").then( function(error , response)
    
    {
        if (uInput === error) {
            spotify.get("https://api.spotify.com/v1/search?q=The%20Sign&type=track&market=US&limit=3&offset=5");
            console.log("Artist(s): " + response.tracks.items[0].artists[0]);
            console.log("Song:" + response.tracks.items.artists.name);
            console.log("URL:" + response.track.items.artist.href);
            
    
        } else {

            console.log("Artist(s): " + response.tracks.items[0].artists[0]);
            console.log("Song:" + response.tracks.items.artists.name);
            console.log("URL:" + response.track.items.artist.href);
            console.log("Album:" + response.track.items.album.name);
        }




    })

  


   

}





function switchCase(op, ui) {
    switch (op) {
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