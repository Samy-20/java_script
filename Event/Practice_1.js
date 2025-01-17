let mode = document.querySelector('.mode');
let body = document.querySelector("body"); // body store a attributes of body.
let curMode = "light";

// 1) method-1

// mode.addEventListener('click', () => {
//     if(curMode === "light"){
//         curMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         curMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log("current mode is: ", curMode);
    
// });

// 2) method-2.
// By create a variable to body to store attributes body.
// A css file has been created in which include a two class dark and light, by using those classes we perform a toggle mode.

mode.addEventListener('click', () => {
    if(curMode === "light"){
        curMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curMode = "light";
        body.classList.add("light");
    }
});
console.log("current mode is: ", curMode); 