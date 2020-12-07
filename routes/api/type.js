const express = require('express');
const router = express.Router();

const { type } = require("../../database");

// Route to get by type
router.get('/:type', (req, res) => {
  res.json(type[req.params.type])
})

module.exports = router