function str_str(str1, str2)
{
    let is_equal = true;

    for(let i = 0; i < str1.length; i++){
       is_equal = true;

       for(let j = 0; j < str2.length; j++){
          if(str1[i + j] !== str2[j]){
            is_equal = false;
            break;
          }
       }

       if(is_equal){
         return true;
       }
     }

     return false;
}

let str1 = "Learning JavaScript";
let str2 = "Java";

console.log(str_str(str1, str2));
