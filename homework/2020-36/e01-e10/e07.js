function repeat(word, number) {
  x = word;
  for (i = 1; i < number; i++) {
    word += x;
  }
  return word;
}

console.log(repeat("moi"));
console.log(repeat("moi", 4));
