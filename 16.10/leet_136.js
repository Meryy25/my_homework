var singleNumber = function(nums) {
    let size = nums.length;

    for(let i = 0; i < size; i++){
        let foundDuplicate = false;
        for(let j = 0; j < size; j++){
            if(i != j && nums[i] === nums[j]){
               foundDuplicate = true;
               break;
            }
        }
        if(!foundDuplicate) return nums[i];
    }    
}

let arr = [4, 1, 2, 1, 2];
console.log(singleNumber(arr));
