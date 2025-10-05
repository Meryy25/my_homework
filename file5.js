let array1 = [1, 2];
let array2 = [3, 4];
let new_array = [];

for(let i = 0; i < array1.length; i++){
   new_array[new_array.length] = array1[i];
}

for(let i = 0; i < array2.length; i++){
   new_array[new_array.length] = array2[i];
}

console.log(new_array);
