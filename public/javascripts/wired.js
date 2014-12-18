$('document').ready(function(){
  var audioElement = $('#audio');
  var htmlAudioElem = document.getElementById('audio');
  var background = $('#bgvid');
  var currentSong = 0;
  var currentBG = 0
  var path = "/media/";

  var songs = ["murdertrain.mp3", "dragonforce.mp3", "slayer.mp3"];
  var backgrounds = ["fire.webm", "bowl.webm"];

  $('#previous').click(function(){
    playPrevious();
  });

  $('#next').click(function(){
    playNext();
  });

  $('#pause').click(function(){
    pause();
  })

  $('#play').click(function(){
    play();
  })

  var playPrevious = function(){
    currentSong = currentSong == 0 ? songs.length - 1 : currentSong - 1;
    currentBG = currentBG == 0 ? backgrounds.length - 1 : currentBG - 1;

    setSources()

    play();
  }

  var playNext = function(){
    currentSong = currentSong == songs.length - 1 ? 0 : currentSong + 1;
    currentBG = currentBG == backgrounds.length - 1 ? 0 : currentBG + 1;

    setSources()

    play();
  }

  var setSources = function(){
    newSong = path + songs[currentSong];
    audioElement.attr('src', newSong);

    newBg = path + backgrounds[currentBG];
    background.attr('src', newBg);
  }

  var play = function(){
    htmlAudioElem.play();
  }

  var pause = function(){
    htmlAudioElem.pause();
  }

  setSources();
  newBg = path + backgrounds[currentBG];
  background.attr('src', newBg);
  // play();
})