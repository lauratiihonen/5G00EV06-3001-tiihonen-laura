String.prototype.isPalindrome = function () {
  if (this == this.split("").reverse().join("")) {
    return true;
  } else return false;
};

console.log("saippuakauppias".isPalindrome()); // true
console.log("abc".isPalindrome()); // false
