function every(arr, fn)
{
    const size = arr.length;

    for(let i = 0; i < size; i++){
       if(!fn(arr[i])){
         return false;
       }
    }
    return true;
}

function foo(num)
{
    return num % 5 === 0;
}

let arr_res = [7, 10, 20, 35];

console.log(every(arr_res, foo));
