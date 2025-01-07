let arr = [1,2,3,4,5,6];

// reduce :-> is used to reducean array to single value.
const output = arr.reduce((previous, current) => {
    return previous + current;
});

// previous = 1, current = 2, output = 3.
// previuos = 3, current = 3, output = 6.
// previous = 6, current = 4, output = 10.
// previous = 10, current = 5, output = 15.
// previous = 15, current = 6, output = 21.

// finnal oputput :-> 21
console.log(output); //21


//this program used to find the largest number from array
const biggest = arr.reduce((previous, current) => {
    return previous > current ? previous : current;
});

console.log(biggest); //6