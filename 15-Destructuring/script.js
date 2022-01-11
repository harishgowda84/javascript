/*****************************************************************
 *   What is Destructuring?
 * 
 * It is used to create variables from array items or object
 *  properties
 * 
 * 

******************************************************************/

// Object destructuring

let employee = {
  empid: 10,
  empName: "John Doe",
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["painting", "music"],
  salary: 2000,
};

console.log(employee);

let { address: addr } = employee;

console.log(addr);

// How to access city and country

let {
  address: { city, county },
} = employee;

console.log(city);

//how to access items in array

let {
  hobbies: [first, second],
} = employee;
console.log(first);

// Destructure array

let items = ["Bag", "Ball", "Bat"];

const [bag, ball, bat] = items;

console.log(ball);
