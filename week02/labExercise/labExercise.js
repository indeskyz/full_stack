const fs = require('fs')
const csv = require('csv-parser')
const countryFile = "./input_countries.csv"
const canadaData = []
const usaData = []



//used to format strings based on the CSV file uppercasing the first letter of each string as well as any letters 
//after whitespace
// eg)  input: united states --> output: United States
let formatCountryName = countryName => {
  if (typeof countryName !== "string") {
    console.log(`ERR: ${countryName} is not a string!`);
  }
  return countryName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};


//if file exists, delete it. Otherwise inform the user that a file will be created
let checkFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err)=>{
    console.log(`${filePath} Exists and Will Be Overwritten`);
    if(err) throw err    
    })  
  } else {
    console.log(`${filePath} Does Not Exist but Will Be Created`);
  }
};
  


//uses writeFile because we want to overwrite any existing data with the most recent data available
let uploadFile = (filePath, dataToWrite) => {
  fs.writeFile(filePath, dataToWrite, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

//main function to read the CSV, add data to the Data Structures, & prepare and create the output files
let getCountryData = (csvFile, countryOne, countryTwo) => {
  let formattedCountryOne = formatCountryName(countryOne);
  let formattedCountryTwo = formatCountryName(countryTwo);
  try {
    fs.createReadStream(csvFile)
      .pipe(csv())
      .on("data", (row) => {
        if (row.country == formattedCountryOne) {
          canadaData.push(row.country);
          canadaData.push(row.year);
          canadaData.push(`${row.population}\r\n`);
        }
        if (row.country == formattedCountryTwo) {
          usaData.push(row.country);
          usaData.push(row.year);
          usaData.push(`${row.population}\r\n`);
        }
      })
      .on("end", () => {
        checkFile("canada.txt");
        checkFile("usa.txt");
        uploadFile("canada.txt", canadaData.toString());
        uploadFile("usa.txt", usaData.toString());
      });
  } catch (err) {
    console.log(err);
  }
};



getCountryData(countryFile, "Canada", "United States")


