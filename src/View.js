// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();

    const res = [
      this.game.track1.join(''),
      this.game.track2.join(''),
      this.game.track3.join(''),
      this.game.track4.join(''),
    ];
    console.log(res.join('\n'));
    console.log('\n\n');
    console.log('Created by "${yourTeamName}" with love');
  }
}

module.exports = View;