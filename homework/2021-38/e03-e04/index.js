const fs = require("fs");

var readlineSync = require(`readline-sync`);
var fileName = readlineSync.question(`May I have the file name? `);

function lueTiedosto(path) {
  function tiedosto(resolve, reject) {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(`File ${path} doesn't exist`);
      } else {
        try {
          const obj = JSON.parse(data);
          if (`name` in obj) {
            console.log(obj.name);
            resolve(data);
          } else {
            reject(`file ${fileName} contains json but not property name`);
          }
        } catch (err) {
          console.log(`file ${fileName} does not contain json`);
        }
      }
    });
  }
  return new Promise(tiedosto);
}

lueTiedosto(fileName)
  .then((data) => console.log(`The content of the file is: \n + ${data}`))
  .catch((err) => console.log(err));
