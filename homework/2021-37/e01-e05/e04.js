let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let f = this.sayHello;
    setTimeout(f, 1000);
  },
};
user.sayDelayedHello();

function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

const test = sayHello.bind(user);
console.log(test());
