const fs = require('fs')
const csv = require('csv-parser')

// Database is indexed by:
const restaurant = {};
const employees = [];
const gender = {};
const country = {};
const type = {};
const division = {};

// Reads through all csv files to create our database object
const csvFiles = ['fogoDeChao.csv', 'gamine.csv', 'hookfish.csv', 'zenYai.csv'];

for (const csvFile of csvFiles) {
  fs.createReadStream(csvFile)
    .pipe(csv())
    .on('error', (e) => console.log(e))
    .on('data', function (row) {
      if (!gender[row.Gender]) gender[row.Gender] = [];
      gender[row.Gender].push(row)

      if (!country[row.Country]) country[row.Country] = [];
      country[row.Country].push(row)

      if (!type[row.Type]) type[row.Type] = [];
      type[row.Type].push(row)

      if (!division[row.Division]) type[row.Type] = [];
      employees.push(row);

      const restaurantName = csvFile.split(".csv")[0];
      if (!restaurant[restaurantName]) restaurant[restaurantName] = [];
      restaurant[restaurantName].push(row);
    }).on('end', function () {
      console.log()
    })
}

module.exports = { restaurant, employees, gender, country, type, division }