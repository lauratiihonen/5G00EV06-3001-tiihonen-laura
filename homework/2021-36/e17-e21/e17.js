function doIt() {
  var x = 5;
  console.log(this); // tulostaa oliot johon this viittaa
  console.log(this == global); // testaa onko this globaali
  return x;
}

doIt();
console.log(doIt());
