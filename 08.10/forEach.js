function forEach(arr, fn)
{
     const size = arr.length;

     for(let i = 0; i < size; i++){
        fn(arr[i]);
     }
     return;
}

function foo(num)
{
     console.log(num / 2);
}

let arr = [1, 2, 5, 16, 19, 24, 25];

forEach(arr, foo);  
