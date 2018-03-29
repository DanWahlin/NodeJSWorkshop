const express = require('express');
const router = express.Router();

const services = require('../services');
const heroService = services.heroService;

router.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
});

module.exports = router;
