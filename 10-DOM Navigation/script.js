const one = document.querySelector(".one");
const fruits = document.querySelector(".fruits");

console.log(one);

console.log(one.childNodes); // returns NodeList. Includes text node.

console.log(fruits.firstChild); // includes text node

console.log(fruits.lastChild); // includes text node

/*
 *********************
  RETURN ONLY CHILDREN
 *********************
*/

console.log(one.children); // return HTMLCollection. Includes only children.

console.log(fruits.firstElementChild); // only return child element. excludes text node

console.log(fruits.lastElementChild); // only return child element. excludes text node

/*
 *********************
  PARENT ELEMENT
 *********************
*/

const child = document.querySelector(".onechild");
console.log(child.parentElement);
console.log(child.parentNode);

/*
 *********************
  SIBLINGS
 *********************
*/

const middle = document.querySelector(".middle");
console.log(middle);

console.log(middle.previousSibling); // returns only text node
console.log(middle.nextSibling); // returns only text node

console.log(middle.previousElementSibling); // returns only child
console.log(middle.nextElementSibling); // returns only child
