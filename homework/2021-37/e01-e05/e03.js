let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(() => {
      this.sayHello();
    }, 1000);
    /*setTimeout(function () {
     this.sayHello();
    }, 1000);*/
  },
};
user.sayDelayedHello();

/*
"use strict";

var user = {
  name: "Jack",
  sayHello: function sayHello() {
    console.log("Hello, ".concat(this.name, "!"));
  },
  sayDelayedHello: function sayDelayedHello() {
    var _this = this;     <---- Tallennetaan this muuttujaan, sillä thisin viittaus Jackiin
                                 katoaa mentäessä funktioon

    setTimeout(function () {
      _this.sayHello();   <---- Käytetään muuttujaa funktiossa
    }, 1000);
  }
};
user.sayDelayedHello();
*/
