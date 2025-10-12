function filter(arr, fn)
{
    const size = arr.length;
    let result = [];

    for(let i = 0; i < size; i++){
       if(fn(arr[i])){
         result.push(arr[i]);
       }
    }

    return result;
}

function foo(num)
{
    return num % 2 === 0;
}

let arr = [1, 4, 6, 18, 17, 20];

let new_arr = filter(arr, foo);
console.log(new_arr);
