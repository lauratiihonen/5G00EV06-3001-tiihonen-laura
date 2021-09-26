const util = require("util");
const fs = require("fs");

var readlineSync = require(`readline-sync`);
var fileName = readlineSync.question(`May I have the file name? `);

const readFile = util.promisify(fs.readFile);
readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.log(`File ${fileName} doesn't exist`);
  } else {
    try {
      JSON.parse(data);
    } catch (err) {
      console.log(`file ${fileName} does not contain json`);
    }
  }
});

function parseJson(data) {
  function func(resolve, reject) {
    const obj = JSON.parse(data);
    if (`name` in obj) {
      console.log(obj.name);
      resolve(data);
    } else {
      reject(`file ${fileName} contains json but not property name`);
    }
  }
  const p = new Promise(func);
  return p;
}

readFile(fileName, "utf-8")
  .then(parseJson)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
