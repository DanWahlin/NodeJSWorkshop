const express = require('express');
const router = express.Router();

const services = require('../services');
const villainService = services.villainService;

router.get('/villains', (req, res) => {
  villainService.getVillains(req, res);
});

module.exports = router;
