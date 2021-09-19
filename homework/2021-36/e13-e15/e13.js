function doIt() {
  function inner() {
    console.log("Hello world");
  }
  return inner;
}

let f = doIt();
f(); //inner()
