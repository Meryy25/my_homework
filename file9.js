function all_sum(str)
{
    let sum = 0;
    for(let i = 0; i < str.length; i++){
       sum += str[i];
    }
    return sum;
}

let str = [19, 25, 6];
console.log("Sum of elements is " + all_sum(str));
