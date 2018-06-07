var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var playlists = library['playlists'];
  for (var songNumber in playlists) {
    var musicId = playlists[songNumber]['id'];
    var musicName = playlists[songNumber]['name'];
    var track = playlists[songNumber]['tracks'];
    var numOfTrack = track.length;
    console.log(musicId + ": " + musicName + " - " + numOfTrack + " tracks");
  }

}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var trackList = library['tracks'];
  for (trackNumber in trackList) {
    var trackId = trackList[trackNumber]['id'];
    var trackName = trackList[trackNumber]['name'];
    var trackArtist = trackList[trackNumber]['artist'];
    var trackAlbum = trackList[trackNumber]['album'];
    console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")")
  }
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlistId = process.argv.slice(2).join("");
  var playlistCalled = library['playlists'];
  var tracklistRequest = library['tracks'];
  for (var playlistRequest in playlistCalled) {
    if (playlistId === playlistRequest) {
      var musicId = playlistCalled[playlistId]['id'];
      var musicName = playlistCalled[playlistId]['name'];
      var track = playlistCalled[playlistId]['tracks'];
      var numOfTrack = track.length;
      console.log(musicId + ": " + musicName + " - " + numOfTrack + " tracks");
    }
  }
  for (var trackRequest in tracklistRequest){
    for (var i = 0; i < track.length; i++) {
      if (track[i] === tracklistRequest[trackRequest]['id']) {
        var trackId = tracklistRequest[trackRequest]['id'];
        var trackName = tracklistRequest[trackRequest]['name'];
        var trackArtist = tracklistRequest[trackRequest]['artist'];
        var trackAlbum = tracklistRequest[trackRequest]['album'];
        console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")")
      }
    }
  }
}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var answerArray = process.argv.slice(2);
  var answer = answerArray.join("");
  console.log(answer);
  if (answer === "t01,p01" || answer === "t01,p02" || answer === "t02,p01" || answer === "t02,p02" || answer === "t03,p01" || answer === "t03,p02") {
    var cleanUpAnswer = answer.split(",");
    var trackId = cleanUpAnswer[0];
    var playlistId = cleanUpAnswer[1];
    var playlists = library['playlists'];
    for (var playlistNumber in playlists) {
      if (playlistId === playlists[playlistNumber]['id']) {
         playlists[playlistNumber]['tracks'] += "," + trackId;
         console.log(playlists[playlistNumber]);
      }
    }
  } else {
    console.log("Invalid input!");
  }

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var input = process.argv.slice(2);
  if(!input) {
    console.log("invalid input");
  } else {
  var inputToString = input.join("");
  var cleanUp = inputToString.split(",")
  var idAssigned = uid();
  library['tracks'][idAssigned] = {
    id: idAssigned,
    name: cleanUp[0],
    artist: cleanUp[1],
    album: cleanUp[2]
  }
  }
  console.log(library['tracks']);
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var input = process.argv.slice(2);
  if(!input) {
    console.log("invalid input");
  } else {
  var idAssigned = uid();
  library['playlists'][idAssigned] = {
    id: idAssigned,
    name: input[0],
    track: []
  }
  }
  console.log(library['playlists']);
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

//printPlaylists();
//printTracks();
//printPlaylist();
//addTrackToPlaylist();
//addTrack();
addPlaylist();