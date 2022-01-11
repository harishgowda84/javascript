let names = ["tim", "john", "harish", "shanu", "bob", "mark"];

console.log(names);

//Accessing arrays

console.log(names[3]);

//length of the array

console.log(names.length);

//Adding elements in the front

names.unshift("menaka");
names.unshift("mary");
names.unshift("susy");

console.log(names);

//Deleting elements from the front
names.shift();

console.log(names);

//adding elements at the end

names.push("apple");
names.push("banana");

console.log(names);

names.pop();
names.pop();

console.log(names);

//splice: mutates the array.

// adding 0 as second argument indicates we want to perform add operations
// at the index(first argument). Elements to be added is mentioned as a third argument
//adding and removal can be performed parallely by specifying elements after second argument

//['mary', 'menaka', 'tim', 'john', 'harish', 'shanu', 'bob', 'mark']

console.log(names.splice(1, 2));

console.log(names); //  ['mary', 'john', 'harish', 'shanu', 'bob', 'mark']

names.splice(3, 0, "Jenny");

console.log(names); //['mary', 'john', 'harish', 'Jenny', 'shanu', 'bob', 'mark']
let nums = ["1", "2", "3"];

names.splice(3, 0, ...nums);

console.log(names); //['mary', 'john', 'harish', '1', '2', '3', 'Jenny', 'shanu', 'bob', 'mark']
//entries

let entries = names.entries();

for (let [index, value] of entries) {
  console.log(`Index is: ${index} and value is: ${value}`);
}

//indexof

console.log(names.indexOf("shanu"));
console.log(names.indexOf("sdjkf"));

//concat

names = names.concat("test");

// slice is immutable

console.log(names);

console.log(names.slice(1));
console.log(names.slice(1, 4));
console.log(names.slice(1, -2));
console.log(names.slice(-3));
console.log(names.slice(-2, -3)); // -3 is coming before -2
console.log(names.slice(-2, 4)); // 4 is coming before -2

//flatmap

let objects = [1, 2, 3, "harish", false, [7, 8, 9]];

let fill = objects.flatMap(function (element) {
  if (typeof element == "number") {
    return element;
  } else return [];
});

console.log(fill);

// Array.from
// You can create array object from object have length property or having iterable object
//You can now perform array functions on it

let cuts = Array.from("Harish");
console.log(cuts);

let contentPara1 = document.getElementsByTagName("p");
console.log(contentPara1);

let modifiedContentPara1 = Array.from(contentPara1); //HTMLCollection(or Nodelist)
console.log(modifiedContentPara1);

let modifiedContentPara3 = Array.from(contentPara1, function (element) {
  return `<h1>${element.textContent}</h1>`;
});
console.log(modifiedContentPara3);
