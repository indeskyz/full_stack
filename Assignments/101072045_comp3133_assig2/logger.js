const fs = require("fs");
const path = require("path");

//make log file directory
fs.mkdir(path.join(__dirname, "logFiles"), { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
  console.log(
    `Successfully Created Log Folder! \nFolder Location : ${pathToLogFiles}`
  );
});

//the craziest way to do this
let ext = ".txt";
let file = "serverLog";
let appendToFile = 1;
let pathToLogFiles = __dirname + "/logFiles/";
let savedFile = pathToLogFiles + file + ext;

//check if file is greater than 5MB
//if it is, rename it and let writeFile create a new serverLog file to write to
const checkFileSize = (pathToFile) => {
  fs.stat(pathToFile, (err, stats) => {
    if (err) {
      throw err;
    }
    if (stats.size > 5_120_000) {
      file += appendToFile;
      appendToFile += 1;
    }
  });
};

//Most Recent Logs will be at the bottom of the file
module.exports.logger = (data) => {
  checkFileSize(savedFile);
  fs.appendFile(savedFile, data, (err) => {
    if (err) {
      throw err;
    }
  });
};
