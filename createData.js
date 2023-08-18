const { Point } = require('./models');
async function createData(hero) {
  await Point.create({ name: hero });
}

module.exports = createData;
