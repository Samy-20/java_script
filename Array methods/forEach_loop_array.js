let arr = [1,2,3,4,5];

// arr -> is pass
arr.forEach(function printVal(val){ // printVal -> is internal function, val -> is variable is pass to internal function.
    console.log(val);
});

console.log("By using arrow function print arr\n");

arr.forEach((val) => {
    console.log(val);
});

//used `for` string also

let str = ["pune", "mumbai", "nashik"];

str.forEach((val) => {
    console.log(val.toUpperCase());
}); 