let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let thisWorks = this;
    console.log(this);
    setTimeout(function () {
      thisWorks.sayHello(); //Hello, Jack!
    }, 1000);
  },
};
user.sayDelayedHello();
