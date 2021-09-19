function Person(fname, lname) {
  if (this instanceof Person) {
    this.fname = fname;
    this.lname = lname;
  } else {
    throw new TypeError("Cannot call a class as a function");
  }
}

let aki = new Person("aki", "nikkinen"); //true
let seppo = new Person("seppo", "taalasmaa"); //true
let ismo = new Person("ismo", "laitela"); //true

var obj = Person("jack", "smith"); //false

console.log(aki);
console.log(seppo);
console.log(ismo);
