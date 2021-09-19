class Person {
  constructor(name) {
    this.name = name;
    let _this = this;

    this.hello = function () {
      console.log("hello " + _this.name);
    };
    this.delayedHello = function () {
      setTimeout(_this.hello, 1000);
    };
  }
}
let jack = new Person("jack");
jack.delayedHello();
jack.hello();

/*
class Person {
  constructor(name) {
    this.name = name;

    this.hello = this.hello.bind(this);
  }
  hello() {
    console.log(`hello ${this.name}`);
  }
  delayedHello() {
    setTimeout(this.hello, 1000);
  }
}
let jack = new Person("jack");
jack.delayedHello();
jack.hello();
*/
