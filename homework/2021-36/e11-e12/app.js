import { readFile } from "fs";
import { writeFile } from "fs";

function copy(original, output) {
  readFile(original, "utf8", (err, data) => {
    writeFile(output, data, (err) => {
      if (err) {
        console.log("error");
      } else {
        console.log("success");
      }
    });
  });
}

var original = String(process.argv[2]);
var output = String(process.argv[3]);
copy(original, output);
