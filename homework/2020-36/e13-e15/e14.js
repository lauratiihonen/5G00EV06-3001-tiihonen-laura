function doIt(x) {
  if (arguments[0] == true) {
    function world() {
      console.log("world");
    }
    return world;
  } else {
    function hello() {
      console.log("hello");
    }
    return hello;
  }
}

doIt(false)(); // outputs hello
doIt(true)(); // outputs world
