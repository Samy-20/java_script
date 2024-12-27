let array = ["sam", "ram", "mahesh", "ramesh"];
console.log(array);
console.log(array.length);
console.log(typeof(array));
console.log("array[3] = ",array[3]);


let marks = [90, 85, 75, 80];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));

//for-loop print array element
console.log("for loop to print the element in array");
let i;
for(i = 0; i < array.length; i++){
    console.log("Element ",i, ":", array[i]);
}

console.log("do-while loop to print element from array");

let ind = 0;
do{
    console.log("Element ",ind, ":", array[ind]);
    ind++;
}while(ind < array.length);

console.log("while loop to print elmenet from array");

let index = 0;
while(index != array.length){
    console.log("Element ",index, ":", array[index]);
    index++;
}
