const play = require('play-sound').Play();

// play with a callback
play.sound('./wavs/sfx/intro.wav', function () {
  // these are all "fire and forget", no callback
  play.sound('./src/sounds/congratulations.wav');
  play.sound('./src/sounds/glitch-in-the-matrix.wav');
  play.sound('./src/sounds/hold-your-horses.wav');
  play.sound('./src/sounds/just-like-magic.wav');
});

//If you want to know when the player has defintely started playing
play.on('play', function (valid) {
  console.log('I just started playing!');
});
play.sound('./src/sounds/just-like-magic.wav');

//If you want to know if this can't play for some reason
play.on('error', function () {
  console.log('I cant play!');
});
