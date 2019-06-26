require("dotenv").config();
var axios = require("axios")
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// var queryUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
// const OmdbApi = require('omdb-api-pt')


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
    omdb.bySearch({
        search: '',
        type: 'series',
        year: '2004',
        page: 1
      }).then(res => console.log(res))
        .catch(err => console.error(err))
    key d5f8b492

}



//     * Artist(s)

//     * The song's name

//     * A preview link of the song from Spotify

//     * The album that the song is from

//   * If no song is provided then your program will default to "The Sign" by Ace of Base.




function spotifyThis(uInput) {
    console.log("line 51 before if:", uInput);
    if (uInput=== "") {
        uInput = "The Sign +Ace of Base" ;
        
    }
    console.log("line 56 after if:", uInput);
    spotify.search({
        type: 'track',
        query: uInput
    }, function (error, response) {
        if (error) {
            console.log('Error occurred: ' + error);
        }else{
            // console.log(data);
            console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
            console.log("Song:" + response.tracks.items[0].name);
            console.log("URL:" + response.tracks.items[0].external_urls.spotify);
            console.log("Album:" + response.tracks.items[0].album.name);
            
        }
        
    });
    
}
    


        function switchCase(op, ui) {
            switch (op) {
                case "concert-this":
                    concertThis(ui);
                    break;
                case "movie-this":
                    movieThis(ui);
                    break;
                case "spotify-this-song":
                        spotifyThis(ui);
                    break
                case "do-what-it-says":
                    doIt(ui);
                    break
            };


        };

        switchCase(command, search)