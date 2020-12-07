const express = require('express');
const router = express.Router();

const { restaurant } = require("../../database");

// Return restaurant names they can search/filter for
router.get('/', (req, res) => {
  res.json(Object.keys(restaurant))
})

// Route to get by restaurant
router.get('/:restaurant', (req, res) => {
  res.json(restaurant[req.params.restaurant])
})

module.exports = router