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
             },

  printPlaylists: function () {
    var playlists = this.playlists;
    for (var songNumber in playlists) {
      var musicId = playlists[songNumber]['id'];
      var musicName = playlists[songNumber]['name'];
      var track = playlists[songNumber]['tracks'];
      var numOfTrack = track.length;
      console.log((musicId + ": " + musicName + " - " + numOfTrack + " tracks"));
    }
  },


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    var trackList = this.tracks;
    for (trackNumber in trackList) {
      var trackId = trackList[trackNumber]['id'];
      var trackName = trackList[trackNumber]['name'];
      var trackArtist = trackList[trackNumber]['artist'];
      var trackAlbum = trackList[trackNumber]['album'];
      console.log((trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")"))
    }
  },


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    var playlistCalled = this.playlists;
    var tracklistRequest = this.tracks;
    var musicId = playlistCalled[playlistId]['id'];
    var musicName = playlistCalled[playlistId]['name'];
    var track = playlistCalled[playlistId]['tracks'];
    var numOfTrack = track.length;
    console.log((musicId + ": " + musicName + " - " + numOfTrack + " tracks"));
  for (var i = 0; i < numOfTrack; i++){
      for (var trackRequest in tracklistRequest) {
        if (track[i] === tracklistRequest[trackRequest]['id']) {
          var trackId = tracklistRequest[trackRequest]['id'];
          var trackName = tracklistRequest[trackRequest]['name'];
          var trackArtist = tracklistRequest[trackRequest]['artist'];
          var trackAlbum = tracklistRequest[trackRequest]['album'];
          console.log((trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")"));
        }
      }
    }
  },

// adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    var playlists = this.playlists;
    playlists[playlistId]['tracks'] += "," + trackId;
    console.log((playlists[playlistId]));
  },


// generates a unique id
// (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


// adds a track to the library

  addTrack: function (name, artist, album) {
    var new_id = this.uid();
    this.tracks[new_id] = {
      id: new_id,
      name: name,
      artist: artist,
      album: album
    }
    console.log((this.tracks));
  },


// adds a playlist to the library

  addPlaylist: function (name) {
    var new_id = this.uid();
    this.playlists[new_id] = {
      id: new_id,
      name: name,
      track: []
    }
    console.log((library['playlists']));
  }
};
console.log("addTrackToPlaylist");
library.addTrackToPlaylist("t02", "p01");

