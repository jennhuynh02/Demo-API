// Using Express for our routes and instantiating API
const express = require("express");
const app = express();

// Parsing request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importing the routes for various categories: country, division, gender, type (employment type), restaurant, employees
const country = require('./routes/api/country');
const division = require('./routes/api/division');
const employees = require('./routes/api/employees');
const gender = require('./routes/api/gender');
const restaurant = require('./routes/api/restaurant');
const type = require('./routes/api/type');

app.use("/api/country", country);
app.use("/api/division", division);
app.use("/api/employees", employees);
app.use("/api/gender", gender);
app.use("/api/restaurant", restaurant);
app.use("/api/type", type);

// Run API on localhost:5000
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));