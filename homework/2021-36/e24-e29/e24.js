let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

let myfunc = user.sayHello;
myfunc();
//kutsutaan funktiolla oliota, joten undefined

let testi = user.sayHello();
testi;
//tämä toimii
//tai
user.sayHello();
