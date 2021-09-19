var readLineSync = require('readline-sync');

var userString = readLineSync.question("Give a string: ");

function isPalindrome(s,i) {
 return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}

console.log(isPalindrome(userString));