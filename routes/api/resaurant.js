const express = require('express');
const router = express.Router();

const { restaurant } = require("../../database");

// Route to get by restaurant
router.get('/:restaurant', (req, res) => {
  res.json(restaurant[req.params.restaurant])
})

module.exports = router