const fs = require('fs')
const csv = require('csv-parser')
const countryFile = "./input_countries.csv"
const canadaData = []
const usaData = []


fs.createReadStream(countryFile)
  .pipe(csv())
  .on("data", (row) => {
    if (row.country == "Canada") {
      canadaData.push(row.country);
      canadaData.push(row.year);
      canadaData.push(`${row.population}\r\n`);
    }
    if (row.country == "United States") {
      usaData.push(row.country);   
      usaData.push(row.year);      
      usaData.push(`${row.population}\r\n`);
    }
  })
  .on("end", () => {
      fs.writeFile("canada.txt", canadaData.toString(), (err) => {
      if (err) {
        console.log(err);
      }
    });
    fs.writeFile("usa.txt", usaData.toString(), (err) => {
      if (err) {
        console.log(err);
      }
    });
  });



