const { resolve } = require("dns");
const fs = require("fs");
const path = require("path");

//the craziest way to do this
let ext = ".txt";
let file = "serverLog";
let appendToFile = 1;
let pathToLogFiles = __dirname + "/logFiles/";
let savedFile = pathToLogFiles + file + ext;

//make log file directory
fs.mkdir(path.join(__dirname, "logFiles"), { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
  console.log(
    `Successfully Created Log Folder! \nFolder Location : ${pathToLogFiles}`
  );
});

//check if file is greater than 5MB
//if it is, rename it & create  new serverLog file to write to
const checkFileSize = (bytes) => {
  if (bytes >= 5_120_000) {
    file += appendToFile;
    appendToFile += 1;
    console.log(
      `\nFile has exceeded maximum size of 5MB\n Created New Log File\n`
    );
  }
};

const logger = (data) => {
  fs.open(savedFile, "a", (err, fd) => {
    if (err) {
      throw err;
    }
    fs.write(fd, data, (err, bytes) => {
      if (err) {
        throw err;
      }
      checkFileSize(bytes);
    });
  });
};

module.exports = {
  logger,
};
