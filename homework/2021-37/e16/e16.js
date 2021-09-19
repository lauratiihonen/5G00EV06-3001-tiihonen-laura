class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  static max(a) {
    let myArray = [];
    for (let i = 0; i < arguments.length; i++) {
      myArray[i] = a[i].radius;
    }
    return Math.max.apply(null, myArray);
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (this._radius > 0) {
      this._radius = newRadius;
    } else throw "Radius must be > 0";
  }
}

let c = new Circle(50); // sets radius
c.radius = 30; // changes radius, uses setter
//console.log(c.radius); // returns radius, uses getter
//c.radius = -70; // crashes app, radius must be > 0

let a = new Circle(40); // sets radius
let b = new Circle(10); // sets radius
let d = new Circle(20); // sets radius

let x = Circle.max([a, b, c, d]);

console.log(x);
