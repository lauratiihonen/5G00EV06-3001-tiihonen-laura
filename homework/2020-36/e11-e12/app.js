import { readFile } from "fs";
import { writeFile } from "fs";
import { accessSync, constants } from "fs";

function copy(original, copy) {
  readFile(original, (err, data) => {
    if (err) throw err;
    console.log(data.toString("utf-8"));
    writeFile(copy, data, (err) => {
      if (err) throw err;
      console.log("success");
    });
  });
}

copy("textfile.txt", "copy.txt");
