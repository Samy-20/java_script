//count the number of vovels from given string

function countVovels(str){
    let count = 0;
    for(const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            count++;
        }
    }
    console.log(count);
}

countVovels("Sahil ZAgade");