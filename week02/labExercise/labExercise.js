const fs = require('fs')
const csv = require('csv-parser')
const countryFile = "./input_countries.csv"
const canadaData = []
const usaData = []



//used to format strings based on the csv uppercasing first letter of each string as well as any letters after whitespace
// eg) United States
let formatCountryName = countryName => {
  if (typeof countryName !== "string") {
    console.log(`ERR: ${countryName} is not a string!`);
  }
  return countryName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};


//we want to handle this synchronously
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


//fs.stat("canada.txt", (err, stats) => {
//      if (err) {
//        fs.writeFile("canada.txt", canadaData.toString(), (err) => {
//          if (err) {
//            console.log(err);
//          }
//        });
//      } else {
//        fs.unlink("canada.txt", (err) => {
//          if (err) {
//            return console.log(err);
//          }
//        });
//        fs.writeFile("canada.txt", canadaData.toString(), (err) => {
//          if (err) {
//            console.log(err);
//          }
//        });
//      }
//    });
//    fs.stat("usa.txt", (err, stats) => {
//      if (err) {
//        fs.writeFile("usa.txt", usaData.toString(), (err) => {
//          if (err) {
//            console.log(err);
//          }
//        });
//      } else {
//        fs.unlink("usa.txt", (err) => {
//          if (err) {
//            return console.log(err);
//          }
//        });
//        fs.writeFile("usa.txt", usaData.toString(), (callback) => {
//          if (err) {
//            console.log(err);
//          }
//        });
//      }
//    });
//



