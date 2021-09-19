import { argv } from "process";
import { max, min } from "./modules/utility.js";
import { argToArray } from "./modules/commandlineargument.js";

let myarray = [1, 2, 3, 4];
console.log(max(myarray));
console.log(min(myarray));

argToArray(argv);
