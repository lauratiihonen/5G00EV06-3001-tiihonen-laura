function helper() {
  user.sayHello(); //olio.funktio()
}

let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let f = this.sayHello;
    setTimeout(f, 1000); //this on globaali
    setTimeout(this.sayHello, 1000); //this on edelleen globaali
    setTimeout(helper, 1000); // tässä kutsutaan funktiota, jossa kutsutaan oliota, jolloin this viittaa jackiin
  },
};
user.sayHello();
user.sayDelayedHello();
