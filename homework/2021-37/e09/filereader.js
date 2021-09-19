const fs = require("fs");

function FileReader(path) {
  this.path = path;
  this.readAndOutput = function () {
    fs.readFile(this.path, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      console.log("Success");
      console.log(this.path);
    });
  };
  this.done = function (err, data) {};
}

module.exports = FileReader;
