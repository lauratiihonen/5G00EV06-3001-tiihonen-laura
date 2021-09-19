import { max, min } from "./utility.js";

export function argToArray(argv) {
  var myArray = [];
  for (let i = 2; i < argv.length; i++) {
    if (isNaN(argv[i]) == false) {
      myArray.push(argv[i]);
    } else {
      throw "Error! Must be a number";
    }
  }
  console.log(myArray);
  console.log("max = " + max(myArray));
  console.log("min = " + min(myArray));
}
