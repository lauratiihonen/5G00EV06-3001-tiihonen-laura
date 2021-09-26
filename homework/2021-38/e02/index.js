function makeCalculation(x, y) {
  const random = Math.floor(Math.random() * 2);
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      if (random == 0) {
        reject("Failed to connect to backend");
      } else {
        if (y != 0) {
          console.log("calculating stuff");
          const division = x / y;
          resolve(division);
        } else {
          reject("Cannot divide with zero");
        }
      }
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve("done");
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation(10, 5)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
