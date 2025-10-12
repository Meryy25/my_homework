function indexOf(arr, element, fromindex)
{
    for(let i = fromindex; i < arr.length; i++){
       if(arr[i] === element){
         return i;
       }
    }
    return -1;
}

let arr = [5, 19, 6, 7, 25];

let result = indexOf(arr, 6, 1);

if(result !== -1){
  console.log(result);
}else{
  console.log("there is not element\n");
}
