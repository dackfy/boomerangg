// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'Raccoons';

    // Тут всё рисуем.
    console.clear();

    const res = [this.game.track1.join('')];
    console.log(res.join('\n'));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
