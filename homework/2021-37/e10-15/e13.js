let obj = { name: "jussi" };

function Dog(name) {
  this.name = name;
  //this.sniffButt = this.sniffButt.bind(obj); //laitetaan this osoittamaan jussiin
  //this.sniffButt = this.sniffButt.bind(this); //nyt this osoittaa taas vilmaan ja spotiin

  /* this.sniffButt = function () {
    console.log("hello world"); //ei jää odottelemaan muita kutsuja eli on asynkroninen
  };*/
}
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt"); // kerran muistissa
};

Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();
spot.delayedSniffButt();
vilma.delayedSniffButt();
