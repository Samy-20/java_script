// change in state of an object is called as a Event.

// BY using javaScript Event Handling 

let btn = document.querySelector(".btn");


// 2) onclick is not using on same object with multiple times

// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX);
// };

// btn.onclick = () => {
//     console.log("btn was clicked!");
//     let a = 25;
//     a++;
//     console.log(a); //26
// };


// let div = document.querySelector("div");
// div.onmouseover= ()=>{
//     console.log("you are inside a box");
// };  


// 3) multiple time we operate on single Object

// btn.addEventListener("click", () => {
//     console.log("button was clicked");
// });
// btn.addEventListener("click", () => {
//     console.log("button was clicked by handler 2");
// });

// 4) remove a event handler.

btn.addEventListener("click", () => {
    console.log("button was clicked");
});
btn.addEventListener("click", () => {
    console.log("button was clicked by handler 2");
});
btn.addEventListener("click", () => {
    console.log("button was clicked by handler 3");
});


// 5) a handler 4 is treated as a variable
const handler4 = () => {
    console.log("button was clicked by handler 4");
};

// 6) addEventListener :-> is used to add the variable.
btn.addEventListener("click", handler4);

// 7) removeEventListener :-> is used to remove the variable.
btn.removeEventListener("click", handler4);

    
