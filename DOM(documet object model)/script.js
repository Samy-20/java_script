console.dir(document.body);
// document.body.style.background = "green";

//Accesing element of html in javascript.
//DOM manupilation.

// 1) using id
// id :-> is unique for only one Element each.
let heading = document.getElementById("heading");
console.log(heading);
console.dir(heading);

// 2) using class
let info = document.getElementsByClassName("info");
console.dir(info);

// 3) using tag name
let pra = document.getElementsByTagName("p");
console.dir(pra);

// 4) querySelector
let firstEle = document.querySelector("p");
console.dir(firstEle);

let allEle = document.querySelectorAll("p");
console.dir(allEle);

// 4A) Access class using querySelector
let infoEle = document.querySelector(".info");
console.dir(infoEle);


// Access the css into javascript
let style = document.querySelector("div");




