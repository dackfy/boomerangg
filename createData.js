const { Point } = require('./models');
const point = require('./models/point');
async function createData(hero, points) {
  await Point.create({ name: hero, score: points});
}

module.exports = createData;
