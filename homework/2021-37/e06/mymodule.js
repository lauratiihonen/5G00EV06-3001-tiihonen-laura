function printName() {
  console.log("laura");
}

function sum(a, b) {
  console.log(a + b);
}

let obj = { printName: printName, sum: sum };
module.exports = obj;
