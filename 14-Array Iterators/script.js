let products = [
  {
    productId: 1,
    productName: "Coffee Beans",
    price: 10,
    discount: 2,
  },
  {
    productId: 2,
    productName: "Orange Juice",
    price: 20,
    discount: 5,
  },
  {
    productId: 3,
    productName: "Iphone",
    price: 900,
    discount: 3,
  },
  {
    productId: 4,
    productName: "Milk",
    price: 5,
    discount: 5,
  },
  {
    productId: 5,
    productName: "Laptop",
    price: 500,
    discount: 5,
  },
];

products.forEach(function (element) {
  console.log(`Product ${element.productName} has price ${element.price}`);
});

let highPriceProducts = products.filter(function (element) {
  return element.price > 500;
});

console.log(highPriceProducts);

/*
************************************************************************
some method test whether atleast 1 element within the array satisfies
the condition
************************************************************************

*/

let isProductEqual500 = products.some(function (element) {
  return element.price == 500;
});

console.log(isProductEqual500);

/*
************************************************************************
every method test whether all elements within the array satisfies
the condition
************************************************************************

*/

let isProductgreaterthan1 = products.every(function (element) {
  return element.price > 1;
});

console.log(isProductgreaterthan1);

/*
************************************************************************
includes method test strictly for equality of objects. Use includes only
for primitives.
************************************************************************

*/

let isProductEqual = products.includes({
  productId: 4,
  productName: "Milk",
  price: 5,
});

console.log(isProductEqual);

let productIds = products.map(function (element) {
  return element.productId;
});

console.log(productIds);

let sum = products.reduce(function (acc, element) {
  return acc + element.price;
}, 0);

console.log(sum);

let sumOfDiffproducts = products.reduce(
  function (acc, element) {
    if (element.price < 300) {
      acc[0][0] = acc[0][0] + element.price;
    } else {
      acc[1][0] = acc[1][0] + element.price;
    }

    return acc;
  },
  [[0], [0]]
);

console.log(sumOfDiffproducts);

let sortedProducts = products.sort(function (a, b) {
  return a.price - b.price;
});

console.log(sortedProducts);

//find

let productRequired = products.find(function (element) {
  return element.price === 900;
});

console.log(productRequired);

let productIndex = products.findIndex(function (element) {
  return element.price === 900;
});

console.log(productIndex);
