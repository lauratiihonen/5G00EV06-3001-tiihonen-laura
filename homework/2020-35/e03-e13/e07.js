//Quotes inside Strings
let x = `He's often called "Johnny"`;
console.log(x);
x = `He's often called 'Johnny'`;
console.log(x);
x = "He's often called 'Johnny'";
console.log(x);
//text = 'He's often called "Johnny"';
//SyntaxError: Unexpected identifier
//console.log(text);


//Multiline Strings
let y =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(y);

/* y =
"The quick
brown fox
jumps over
the lazy dog";*/
//SyntaxError: Invalid or unexpected token
//console.log(y);

/* y =
'The quick
brown fox
jumps over
the lazy dog';
*/
//SyntaxError: Invalid or unexpected token
//console.log(y);


//Variable Substitution
let firstName = "John";
let lastName = "Doe";

let z = `Welcome ${firstName}, ${lastName}!`;
console.log(z);
z = "Welcome " + firstName + "," + " " + lastName + "!";
console.log(z);
z = 'Welcome ' + firstName + ',' + ' ' + lastName + '!';
console.log(z);


//Expression Substitution
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
total = "Total: " + (price * (1 + VAT)).toFixed(2);
console.log(total);
total = 'Total: ' + (price * (1 + VAT)).toFixed(2);
console.log(total);