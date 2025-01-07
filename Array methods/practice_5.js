// Take n number from user, create an array of number from 1 to n, use the reduce method and find sum of array of number, use reduce nethod to find product of array.

let a = prompt("Enter the value of n");

let arr = [];

//store a array in arr.
for(let i=1; i<=a; i++){
    arr[i-1] = i;
}

console.log(arr);

//sum of array
const sum = arr.reduce((prev, cons) => {
    return prev + cons;
});
console.log(`sum is ${sum}`);

// product of array
const product = arr.reduce((prev, cons) => {
    return prev * cons;
});
console.log(`product is ${product}`);
