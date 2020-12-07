const express = require('express');
const router = express.Router();

const { gender } = require("../../database");

// Route to get by gender
router.get('/:gender', (req, res) => {
  res.json(gender[req.params.gender])
})

module.exports = router