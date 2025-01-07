// by using arrow we can store the function in variables.

function multi(a, b){
    return a * b;
}

// const arrowMulti -> these variable used to store the value of arrow function
const arrowMulti = (a,b) => {
    console.log("multiply a and b ", a*b);
};

arrowMulti(2, 10);// call the arrow fuction

let add = (a, b) => {
    console.log("sum of number is ");
    return a+b;
};

add(2, 5);