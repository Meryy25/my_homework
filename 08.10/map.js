function map(arr, fn)
{
    const size = arr.length;
    let result = [];

    for(let i = 0; i < size; i++){
       result.push(fn(arr[i]));
    }

    return result;
}

function foo(num)
{
    return num * num;
}

let arr = [1, 5, 3, 7];

let new_arr = map(arr, foo);
console.log(new_arr);
