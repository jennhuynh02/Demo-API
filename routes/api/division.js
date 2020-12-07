const express = require('express');
const router = express.Router();

const { division } = require("../../database");

// Return division types they can search/filter for
router.get('/', (req, res) => {
  res.json(Object.keys(division))
})

// Route to get by division
router.get('/:division', (req, res) => {
  res.json(division[req.params.division])
})

module.exports = router