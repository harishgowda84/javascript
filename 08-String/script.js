let message = " This is a simple message!";

//string length

console.log(message.length);

// to upper case

console.log(message.toUpperCase());

// charAt

console.log(message.charAt(2));

//concat strings

console.log(message.concat(" HARISH"));

//last character of the string

console.log(message.charAt(message.length - 1));

//indexof

console.log(message.indexOf("@"));

console.log(message.indexOf("i"));

//trim

console.log(message);
console.log(message.trim());

//startswith

console.log(message.trim().toLowerCase().startsWith("this")); // true

//includes

console.log(message.includes("xsw")); //false
console.log(message.includes("ess")); //true

//slice

console.log(message.slice(0, 2)); // end index is non-inclusive
console.log(message.slice(0, 5)); // end index is non-inclusive
console.log(message.slice(-1)); // end index is non-inclusive
console.log(message.slice(-message.length, -4)); // starts -> str.length+startindex, str.length+endindex
//str.length-str.length(0), str.length-4
