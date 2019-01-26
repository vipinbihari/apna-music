//THESE ARE GLOBAL VARIABLE FOR PLAYLIST
playlist =[];
index = 0;
//THESE ARE GLOBAL VARIABLE FOR PLAYLIST

function playAudio() {
  audio.src = playlist[index].src;
  audio.play()
  .then(_ => updateMetadata())
  .catch(error => console.log('error'));
}

function updateMetadata() {
  //console.log('Playing ' + playlist[index].title + ' track...');
  navigator.mediaSession.metadata = new MediaMetadata({
    title: playlist[index].title,
    artist: playlist[index].artist,
    artwork: playlist[index].artwork
  });
}

/* Previous Track & Next Track */
navigator.mediaSession.setActionHandler('previoustrack', function() {
  // User clicked "Previous Track" media notification icon.
  index = (index - 1 + playlist.length) % playlist.length;
  playAudio();
});

navigator.mediaSession.setActionHandler('nexttrack', function() {
  // User clicked "Next Track" media notification icon.
  index = (index + 1) % playlist.length;
  playAudio();
  //FOR AUTOPLAY MODE
  if(index == playlist.length -1){
//ADDING AN AUTOPLAY AUDIO ELEMENT TO THE PLAYLIST FOR THE NEXT AUDIO
if(autoPlayIds.length > 0){

  autoPlayIdDetails(autoPlayIds.shift());
}else{

autoPlayIdsFunc(autoPlayMainId, nextAutoPageToken);
  
}


  }
});


audio.addEventListener('ended', function() {
  // Play automatically the next track when audio ends.
  index = (index + 1) % playlist.length;
  playAudio();
   //FOR AUTOPLAY MODE
  if(index == playlist.length -1){
//ADDING AN AUTOPLAY AUDIO ELEMENT TO THE PLAYLIST FOR THE NEXT AUDIO
if(autoPlayIds.length > 0){

  autoPlayIdDetails(autoPlayIds.shift());
}else{

autoPlayIdsFunc(autoPlayMainId, nextAutoPageToken);
  
}


  }
});

/* Seek Backward & Seek Forward */
let skipTime = 10; // Time to skip in seconds

navigator.mediaSession.setActionHandler('seekbackward', function() {
  // User clicked "Seek Backward" media notification icon.
  audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
});

navigator.mediaSession.setActionHandler('seekforward', function() {
  // User clicked "Seek Forward" media notification icon.
  audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration);
});

/* Play & Pause */

navigator.mediaSession.setActionHandler('play', function() {
  console.log('> User clicked "Play" icon.');
  audio.play();
  // Do something more than just playing audio...
});

navigator.mediaSession.setActionHandler('pause', function() {
  console.log('> User clicked "Pause" icon.');
  audio.pause();
  // Do something more than just pausing audio...
});




