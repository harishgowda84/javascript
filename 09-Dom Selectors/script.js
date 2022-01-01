/*
 Get element by Id
*/
const h3 = document.getElementById("product");

console.log(h3);

h3.style.color = "tomato";

/*

Get elements by TagName

*/

const items = document.getElementsByTagName("li");

console.log(items); // returns HTMLCollection. Cannot use foreach

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

/*

Get elements by class name

*/

const specialClasses = document.getElementsByClassName("special");

console.log(specialClasses); // returns HTMLCollection. Cannot use foreach

for (let i = 0; i < specialClasses.length; i++) {
  console.log(specialClasses[i]);
}

/*

Get element by QuerySelector

*/

const product = document.querySelector("#product");
console.log(product);

/*
 Get elements by QuerySelector
 */

const special = document.querySelectorAll(".special");

console.log(special); // Returns Node list

special.forEach(function (item) {
  console.log(item);
});
