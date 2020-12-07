const express = require('express');
const router = express.Router();

const { country } = require("../../database");

// Return country types they can search/filter for
router.get('/', (req, res) => {
  res.json(Object.keys(country))
})

// Route to get by country
router.get('/:country', (req, res) => {
  res.json(country[req.params.country])
})

module.exports = router