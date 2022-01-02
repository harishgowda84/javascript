/*
**************************************************************************************
LOCAL STORAGE

setItem
getItem
removeItem
clear
**************************************************************************************
*/
localStorage.setItem("city", "bengaluru");
localStorage.setItem("id", "101");
console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("id"));

localStorage.removeItem("id");
localStorage.clear();

/*
**************************************************************************************
LOCAL STORAGE

Set item with multiple values we need to stringify values before setting values
Once item is returned we need to parse it


Example 1: Using Object
Example 2: Using arrays
**************************************************************************************
*/

let emp = {
  empid: 1,
  empName: "John Doe",
};

localStorage.setItem("employee", JSON.stringify(emp));

let returnedObject = JSON.parse(localStorage.getItem("employee"));

console.log(returnedObject["empName"]);

let colors = ["blue", "red", "yellow"];

localStorage.setItem("colors", JSON.stringify(colors));

console.log(JSON.parse(localStorage.getItem("colors")));
