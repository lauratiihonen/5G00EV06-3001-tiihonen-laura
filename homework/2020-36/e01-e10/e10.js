function doIt(a, b, c) {
  for (i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

doIt("a");
doIt("a", "b");
doIt("a", "b", "c");
