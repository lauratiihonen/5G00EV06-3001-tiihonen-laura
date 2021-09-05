var readLineSync = require('readline-sync');

var name = readLineSync.question("What's your name? ");
var number = readLineSync.question("Give a number ");


for (let i = 0; i < number; i++) {
  console.log("Hello " + name + "!");
}
