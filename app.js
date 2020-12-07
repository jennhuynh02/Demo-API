// Instantiating API
const express = require("express");
const app = express();

// Run API on localhost:5000
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Importing the routes
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