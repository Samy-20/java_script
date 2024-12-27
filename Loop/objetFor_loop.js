let student = {
    name : "rahul",
    Cgpa : 9.5,
    age : 20,
    isPass : true,
}

let i = 0
for(let i in student){
    console.log("key = ", i, ", value = ", student[i]);
}