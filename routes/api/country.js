const express = require('express');
const router = express.Router();

const { country } = require("../../database");

// Route to get by country
router.get('/:country', (req, res) => {
  res.json(country[req.params.country])
})

module.exports = router