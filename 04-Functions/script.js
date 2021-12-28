/*
Function declaration and
*/

function greeting() {
  console.log("Hi from all");
}

greeting();

/*
  Function parameters
*/

function sum(a, b) {
  console.log(`Sum is ${a + b}`);
}

sum(12, 45);

/*
  Return values
*/

function getMessage() {
  return "This is a message";
}

let msg = getMessage();

console.log(msg);

/*
 Function expressions

 We can create function expressions by assigning function to a variable
*/

let multiply = function mul(m, n) {
  return m * n;
};

console.log(multiply(10, 15));

let m = function getList(element) {
  console.log(this.title + " " + element);
};

/*
    Callback functions have global scopes
*/

let video = {
  title: "Josh",
  tags: ["Music", "Romantic"],
  printVideos() {
    this.tags.forEach(
      function (element) {
        console.log(this.title + " : " + element);
      }.bind(this)
    );
  },
};

video.printVideos();

/*
 Higher order functions: It accepts another function as an argument or returns another function as a result

 Callback function: Passed to another function as an argument and executed inside the functions
*/

function boilWater() {
  console.log("Water is boiled");
}

function addTeaLeaves() {
  console.log("Tea leaved added ");
}

function addMilk() {
  console.log("Milk is added");
}

function prepareTea(cb1, cb2, cb3) {
  cb1();
  cb2();
  cb3();
}

prepareTea(boilWater, addTeaLeaves, addMilk);
