function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  console.log(this instanceof Person);
}

let aki = new Person("aki", "nikkinen"); //true
let seppo = new Person("seppo", "taalasmaa"); //true
let ismo = new Person("ismo", "laitela"); //true

var obj = Person("jack", "smith"); //false

console.log(aki);
console.log(seppo);
console.log(ismo);
