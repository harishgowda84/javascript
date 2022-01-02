/*

**************************************************************************
CREATING AND APPENDING CHILD TO THE BODY/OTHER ELEMENT

parentElement.appendChild(childElement)
**************************************************************************
*/

const elementDiv = document.createElement("div");
const elementText = document.createTextNode("This is a new element created");
elementDiv.appendChild(elementText);

document.body.appendChild(elementDiv);

const elementPara = document.createElement("p");
const elementParaText = document.createTextNode(
  "This is a new paragraph appended"
);
elementPara.appendChild(elementParaText);

const result = document.querySelector("#result");
result.appendChild(elementPara);

/*

**************************************************************************
insertBefore

parentElement.insertBefore(newElement,beforeThisElement)
**************************************************************************
*/

const content = document.querySelector(".content");

const h3 = document.createElement("h3");
const h3text = document.createTextNode("This is h3 text");
h3.appendChild(h3text);

result.insertBefore(h3, content);

/*

**************************************************************************
replaceChild

parentElement.replaceChild(newElement,oldElement)
**************************************************************************
*/

const newContent = document.createElement("p");
newContent.textContent = "This is new paragraph content replaced";

result.replaceChild(newContent, content);

/*

**************************************************************************
prepend

parentElement.prepend(newElement)
**************************************************************************
*/

const h1 = document.createElement("h1");
h1.textContent = "This is example for prepend";

document.body.prepend(h1);

/*

**************************************************************************
remove--> Directly remove the child by accessing it. No need for parent reference

removeChild-> Remove element based on parent reference

parent.removeChild(childElement);
**************************************************************************
*/

const heading1 = document.querySelector("h1");
heading1.remove();

const a = document.querySelector(".special");

result.removeChild(a);

/*

**************************************************************************
innerHTML

newElement.innerHTML="htmlcontent"
**************************************************************************
*/

const product = document.createElement("div");

product.innerHTML = `<h2>Products</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, in.</p>
<p>Lorem ipsum dolor sit amet.</p>`;

console.log(product);

document.body.appendChild(product);

console.log(product.innerHTML);
console.log(product.textContent);
