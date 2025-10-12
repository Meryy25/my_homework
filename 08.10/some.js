function some(arr, fn)
{
    const size = arr.length;

    for(let i = 0; i < arr.length; i++){
       if(i in arr){
         if(fn(arr[i])){
           return true;
         }
       }
    }
       return false;
}

function foo(value)
{
    if(value % 5 == 0){
      return true;
    } 
    return false;
}

let arr = [3, 15, 7, 9];
console.log(some(arr, foo));
