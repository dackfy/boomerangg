// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const readlineSync = require('readline-sync');

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength);
    this.hero = new Hero({ position: 0, boomerang: this.boomerang });
    this.enemy = new Enemy(trackLength);
    this.view = new View(this);
    this.track1 = [];
    this.track2 = [];
    this.track3 = [];
    this.track4 = [];

    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track1 = new Array(this.trackLength).fill(' ');
    this.track1[this.hero.position] = this.hero.skin;
    this.track1[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track1[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }

    this.track2 = new Array(this.trackLength).fill(' ');
    // this.track2[this.hero.position] = this.hero.skin;
    this.track2[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track2[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }

    this.track3 = new Array(this.trackLength).fill(' ');
    // this.track3[this.hero.position] = this.hero.skin;
    this.track3[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track3[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }

    this.track4 = new Array(this.trackLength).fill(' ');
    // this.track4[this.hero.position] = this.hero.skin;
    this.track4[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track4[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    const x = readlineSync.question('Введите имя: ')
    process.stdin.resume()
    console.log(x);
    setInterval(() => {
      // Let's play!
      this.handleCollisions();
      this.regenerateTrack();

      // Добавьте логику движения врагов, например, двигаться влево
      this.enemy.moveLeft();

      // Если враг достиг края трека, перемещаем его в начало
      if (this.enemy.position < 0) {
        this.enemy.position = this.trackLength - 1;
      }

      this.view.render(this.track);
    }, 100); // Вы можете настроить частоту обновления игрового цикла
  }

  handleCollisions() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }

    if (this.boomerang.position === this.enemy.position) {
      this.enemy.die();
      // Обнуляем позицию бумеранга после столкновения с врагом
      // this.boomerang.position = -1;
      this.enemy = new Enemy(this.trackLength); // Создаем нового врага
    }
  }
}

module.exports = Game;
