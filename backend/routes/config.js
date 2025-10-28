// backend/routes/config.js
const express = require('express');
const router = express.Router();
const {Pump} = require('../models');

// POST /api/config/pump
router.post('/pump', (req, res) => {
  Pump.create(req.body, (err) => {
    if (err) return res.status(400).send({error: err.message});
    res.send({message: 'Pump created'});
  });
});
// GET /api/config/pump
router.get('/pump', (req, res) => {
  Pump.getAll((err, rows) => {
    if (err) return res.status(400).send({error: err.message});
    res.send(rows);
  });
});
module.exports = router;
