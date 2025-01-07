let number = [1,2,3,4,5];

//syantax :-> arr.map(callBackFun(value, index, array));

// map method allows to copy of a array in new array.

let newArray = number.map((val) => {
    return val;
    // return val**2;
});

console.log(newArray);


