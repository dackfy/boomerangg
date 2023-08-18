// Наш герой.
const player = require('play-sound')((opts = {}));

class Hero {
  constructor({ position, boomerang }) {
    this.skin = '🤵';
    this.position = position;
    this.boomerang = boomerang;
  }

  playDeadSound() {
    const newLocal = './src/sounds/dead.m4a';
    player.play(newLocal, function (err) {
      if (err) throw err;
    });
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    this.playDeadSound();
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

// const hero = new Hero({ position: 0, boomerang: 6 });
// hero.die();
 module.exports = Hero;
