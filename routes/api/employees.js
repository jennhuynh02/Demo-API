const express = require('express');
const router = express.Router();

const { employees } = require("../../database");

router.get('/', (req, res) => {
  res.json(employees)
})

module.exports = router