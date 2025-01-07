// To find sqaure of given string.

let number = [1,2,3,4,5];

// number.forEach((num) => {
//     console.log(num * num);
//     // console.log(num ** 2); 
// });

//Another way to call forEach loop.
let calSquare = (num) => {
    console.log(num * num);
};

number.forEach(calSquare);