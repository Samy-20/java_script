
// student is object.
//object -> is collection of different variables.

const student = {
    fullName : "sam",//fullName -> key
    age : 21,//age -> key
    cgpa : 8.2,//cgpa -> key
    isPass : true,//isPass -> key
};

console.log(student.age);

student.age = student.age+1; //Increment by value '1'.

console.log(student["age"]);

student.fullName = "sahil";
console.log(student.fullName);