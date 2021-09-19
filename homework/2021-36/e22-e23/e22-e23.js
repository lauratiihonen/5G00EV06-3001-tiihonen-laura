function doIt(a, b) {
  console.log(this);
}
let object = { key: "value" };
doIt.call(object, 5, 5); //Ensimmäinen argumentti on object eli this
doIt.apply(object, 5, 5);
//apply lähettää argumentit taulukkona, jos haluaa lähettää lista argumenteista, tulee käyttää call
