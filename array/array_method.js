let food = ["apple", "mango", "panner", "soya"];
let fruit = ["orange", "mango","licthi", "strabary"];
let vegeTable = ["carrot", "tomato", "pumkin", "root"];

for(let i = 0; i < food.length; i++){
    console.log("Element in Food array", food[i]);
}

// 1) push()

food.push("orange");
console.log(food);

// 2) Pop()

food.pop("");
console.log(food);

// 3) concat() :- add two array in one array.

let fruitVege = fruit.concat(vegeTable);
console.log(fruitVege);

// 4) shift :- used  to delete a first item from array

let shift = food.shift();
console.log("delete item :", shift);

// 5) slice :- break small part of array, not disturb original array.

console.log(food.slice(1, 3));

// 6) splice() :- use to modify original array

fruit.splice(2, 2, "pupaya", "bannana");
console.log(fruit);