//Find the average marks for array elemenet.
let array = [85, 97, 44, 37, 76, 60];

let i;
let sum = 0;
for(i = 0; i < array.length; i++){
    console.log("Element ", i, ":", array[i]);
    sum = sum + array[i];
}
console.log("Sum of element in array : ",sum);

let avgMarks = sum / array.length;

console.log(`average marks is : ${avgMarks}`);
// console.log("average marks is : ", avgMarks);