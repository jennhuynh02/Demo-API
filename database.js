const fs = require('fs')
const csv = require('csv-parser')

const restaurant = {};
const employees = [];
const gender = {};
const country = {};
const type = {};
const division = {};

const csvFiles = ['fogoDeChao.csv', 'gamine.csv', 'hookfish.csv', 'zenYai.csv'];

for (const csvFile of csvFiles) {
  fs.createReadStream(csvFile)
    .pipe(csv())
    .on('error', (e) => console.log(e))
    .on('data', function (row) {
      if (!gender[row.Gender.toLowerCase()]) gender[row.Gender.toLowerCase()] = [];
      gender[row.Gender.toLowerCase()].push(row)

      if (!country[row.Country.toLowerCase()]) country[row.Country.toLowerCase()] = [];
      country[row.Country.toLowerCase()].push(row)

      if (!type[row.Type.toLowerCase()]) type[row.Type.toLowerCase()] = [];
      type[row.Type.toLowerCase()].push(row)

      if (!division[row.Division.toLowerCase()]) type[row.Type.toLowerCase()] = [];
      employees.push(row);

      const restaurantName = csvFile.split(".csv")[0];
      if (!restaurant[restaurantName.toLowerCase()]) restaurant[restaurantName.toLowerCase()] = [];
      restaurant[restaurantName.toLowerCase()].push(row);
    }).on('end', function () {
      console.log(gender)
    })
}

module.exports = { restaurant, employees, gender, country, type, division }

const restaurant = {};
const employees = [];
const gender = {};
const country = {};
const type = {};
const division = {};