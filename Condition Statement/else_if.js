let marks = prompt("Enter the marks");

if(marks >= 90 && marks <= 100){
    console.log("Grade is: A");
}
else if(marks >= 70 && marks <= 89){
    console.log("Grade is: B");
}
else if(marks >= 60 && marks <= 69){
    console.log("Grade is: C");
}
else if(marks >= 50 && marks <= 59){
    console.log("Grade is: D");
}
else{
    console.log("Grade is: F");
}