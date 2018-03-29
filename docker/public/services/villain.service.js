const models = require('../models');
const Villain = models.Villain;

function getVillains(req, res) {
  res.send([
    {
      id: 21,
      name: 'John',
      description: 'Slayer of JavaScript'
    },
    {
      id: 22,
      name: 'Colleen',
      description: 'Wielder of the Service Worker'
    },
    {
      id: 23,
      name: 'Dan',
      description: 'The Hacker of Node'
    }
  ]);
}

module.exports = {
  getVillains
};
