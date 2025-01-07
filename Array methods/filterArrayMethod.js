arr = [1,2,3,5,6]

// filter is used apply some condition. 

let newArray = arr.filter((val) => {
    return val % 2 === 0;
})

console.log(newArray);