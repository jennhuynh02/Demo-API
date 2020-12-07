const express = require('express');
const router = express.Router();

const { division } = require("../../database");

// Route to get by division
router.get('/:division', (req, res) => {
  res.json(division[req.params.division])
})

module.exports = router