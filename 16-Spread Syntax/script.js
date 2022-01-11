/*****************************************************************
 *   What is Spread Syntax?
 *
 *   Spread syntax is used to unpack iterables such as arrays,
 *   objects and function calls
 *
 ******************************************************************/

// Arrays

let names = ["John", "Bob", "Mary", "Sunny", "Tim"];

let tempNames = [...names]; // Shallow copy of the array

console.log(names);
console.log(tempNames);

names.push("Harish");

console.log(names);
console.log(tempNames);

let otherNames = [...names, "Jim", "Robert"];

console.log(otherNames); // Concatenate the array

// Unpack string into array

let myName = "Harish Gowda";

let letters = [...myName];

console.log(letters);

// Objects

let person = {
  name: "John Doe",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};

let copyPerson = { ...person };

console.log(person);
console.log(copyPerson);

copyPerson.address.city = "California";

console.log(person);
console.log(copyPerson); // Both are same

let completecopy = {
  ...person,
  address: {
    city: "Sydney",
    country: "Australia",
  },
};

console.log(person);
console.log(completecopy); // Both are diff

//functions

let numbers = [1, 2, 3, 4];

function sum(element) {
  console.log(arguments);
}

sum(...numbers);
