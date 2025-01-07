let l = prompt("Enter the number\n");
// l -> global variable.

function myFunction(msg, l){
    console.log(`msg = ${msg}, l is ${l}`);
}
let msg = "hello bro";
myFunction(msg, l);


function sum(a, b){
    console.log("sum of a and b",a + b);
}
sum(121,300);


//function can return value
function num(a, b){
    console.log("before the return is");
    s = a + b; // a, b, s -> local  variable.
    return s;
}
let val = sum(3, 5);
console.log(val);