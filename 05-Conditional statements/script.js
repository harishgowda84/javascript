/*
  Conditional statements:
  >,<,>=,<=,==,===,!=,!===
*/

/*
   == Checks only value
   === checks value and type
*/

const num1 = 20;
const num2 = 12;

if (num1 > num2) {
  console.log("num1 is greater then num2");
}

const num3 = 12;
const num4 = 15;

if (num3 < num4) {
  console.log("num3 is less then num4");
}

const num5 = 100;
const num6 = 100;

if (num5 == num6) {
  console.log("Numbers are equal");
}

const num7 = "100";

if (num5 == num7) {
  console.log("Number with string are equal");
}

if (num5 === num7) {
  console.log("Number with string are equal");
} else {
  console.log("Number with string are not equal");
}

const num8 = 101;

if (num6 != num8) {
  console.log("Number are not equal");
}
