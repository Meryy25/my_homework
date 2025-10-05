function count_char(str)
{
    let count = 0;
    for(let i = 0; i < str.length; i++){
       count++;
    }
    return count;
}

let str = "hello baby";
console.log("count of the characters is " + count_char(str));
