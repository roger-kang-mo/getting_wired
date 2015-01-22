$('document').ready(function(){
  var millConversion = 60000;
  var audioElement = $('#audio');
  var htmlAudioElem = document.getElementById('audio');
  var background = $('#bgvid');
  var currentSong = 0;
  var currentBG = 0
  var path = "/media/";
  var currentlyPlayingText = $('#currently_playing');
  var playingWrapper = $('#playing');
  var expand = $('#expand');
  var boxContainer = $('#box-container');

  var songs = ["dragonforce.mp3", "murdertrain.mp3",  "slayer.mp3"];
  var songTitles = ["DragonForce - Through the Fire and Flames", "The Foreskins - Murder Train", "Slayer - Raining Blood"]
  var backgrounds = ["fire.webm", "bowl.webm"];

  $('#previous').click(function(){
    playPrevious();
  });

  $('#next').click(function(){
    playNext();
  });

  $('#pause').click(function(){
    pause();
  });

  $('#play').click(function(){
    play();
  });

  $('#expand').click(function(){
    goFullHard();
  });

  $('.timer-box').click(function(event){
    minutes = $(event.target).data('value');

    handleTimer(minutes * millConversion);
  });

  var goFullHard = function(){
    document.getElementById('bgvid').webkitRequestFullScreen();
  }

  var handleTimer = function(time){
    goFullHard();
    setTimeout(function(){exitFullScreen();}, time);
  }

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
    currentlyPlayingText.text(songTitles[currentSong]);
    playingWrapper.show()
    htmlAudioElem.play();
  }

  var pause = function(){
    htmlAudioElem.pause();
  }

  var exitFullScreen = function(){
    document.webkitExitFullscreen();
  }

  setSources();
  newBg = path + backgrounds[currentBG];
  background.attr('src', newBg);
  play();
})