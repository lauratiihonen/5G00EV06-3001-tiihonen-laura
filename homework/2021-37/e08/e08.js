//Case 1 - Anonymous inner function and closure
/*function Clock() {
  var _this = this;
  _this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(function () {
      _this.tick();
    }, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}*/

//Case 2 - Arrow syntax
/*function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(() => {
      this.tick();
    }, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}*/

//Case 3 - Function binding
function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(this.tick.bind(this), 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}

let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); // outputs time for every second, uses render
