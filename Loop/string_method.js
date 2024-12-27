let str = "sky  herald   "

console.log(str.length);
let newStr = str.toUpperCase();
console.log("toUpperCase--", newStr);

let neString = str.toLowerCase();
console.log("toLowerCase--", str.toLowerCase());

console.log("trim--", str.trim());

console.log("slice of string --", str.slice(1, 3));
console.log("slice of string --", str.slice());//NOT PASS ANY VALUE IT SHOW THE STRING AT IS IT

console.log("concatenate method -- ");
let st =  str.concat();
console.log(st); 


console.log();