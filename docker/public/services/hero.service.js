const models = require('../models');
const Hero = models.Hero;

function getHeroes(req, res) {
  res.send([
    {
      id: 11,
      name: 'Ragnar Lothbrok',
      description: 'aka Ragnar Sigurdsson'
    },
    {
      id: 12,
      name: 'Ivar the Boneless',
      description: 'commander of the Great Heathen Army'
    },
    {
      id: 13,
      name: 'Bjorn Ironside',
      description: 'king of 9th century Sweden'
    },
    {
      id: 14,
      name: 'Lagertha the Shieldmaiden',
      description: 'aka Hlaðgerðr'
    },
    {
      id: 14,
      name: 'Aslaug',
      description: 'warrior queen'
    },
    {
      id: 14,
      name: 'Thora Town-hart',
      description: 'daughter of Earl Herrauðr of Götaland'
    }
  ]);
}

module.exports = {
  getHeroes
};
