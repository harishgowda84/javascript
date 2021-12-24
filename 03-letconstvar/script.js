/*

DECLARATION AND UPDATION OF VARIABLES

var can be re-declared and updated
let can be cannot be re-declared but can be updated
const cannnot be re-declared and cannot be updated
*/

var name = "harish";
var name = "John";
name = 1;
console.log(name);

let username = "Tom";
//let username = 1; //error
console.log(username);

const _username = "Jim";
//const _username = "Mary";
//_username = "Bob";

console.log(_username);

/*
   SCOPE OF THE VARIABLES

   VAR IS GLOBAL SCOPED, FUNCTION SCOPED BUT NOT BLOCK SCOPED
   LET AND CONST BLOCK SCOPED

*/

var greeting = "Hi";

function printMessage() {
  var greeting = "Hi from print message";
  //console.log(greeting);
}

if (true) {
  var greeting = "Hi..from block";
}

printMessage();

console.log(greeting);

let output = "Hi";

function printOutput() {
  let output = "Hi from print message";
  //console.log(greeting);
}

if (true) {
  let output = "Hi..from block";
}

printOutput();

console.log(output);

/*
   HOISTING OF VARIABLES

   "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
    variables or classes to the top of their scope, prior to execution of the code."

   var,let and const are all hoisted


*/

console.log(eggs);
var eggs; // undefined

/*
console.log(milk);
let milk;  // throws error

console.log(orange);
const orange; // throws error
*/
