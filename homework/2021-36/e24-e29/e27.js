let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

//setTimeout(user.sayHello(), 1000);
//kutsutaan funktiota joten this viittaa globaaliin olioon

//let f = user.sayHello;
//f();

function sayHello() {
  user.sayHello(); // olio.funktio() joten nyt this viittaa olioon
}

setTimeout(sayHello, 1000); //kutsuu funktiota missä on olio.funktio() joka viittaa jackiin

user.sayHello = function () {
  console.log("does it work?");
};
//kutsu on asynkroninen ja ei jää odottelemaan edellisen kutsun loppua
