const express = require('express');
const router = express.Router();

const { gender } = require("../../database");

// Return gender types they can search/filter for
router.get('/', (req, res) => {
  res.json(Object.keys(gender))
})

// Route to get by gender
router.get('/:gender', (req, res) => {
  res.json(gender[req.params.gender])
})

module.exports = router