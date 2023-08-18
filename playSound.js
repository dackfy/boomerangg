var player = require('play-sound')((opts = {}));

const newLocal = './src/sounds/congratulations.wav';
const audio = player.play(newLocal, function (err) {
  if (err) throw err;
});

//audio.kill()
