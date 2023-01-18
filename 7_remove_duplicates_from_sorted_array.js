let nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5

var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    else {
        let insertIndex = 1;
        for(let i = 1; i < nums.length; i++){
            if(nums[i - 1] != nums[i]){
                nums[insertIndex] = nums[i];  
                insertIndex++; 
            }
        }
        return insertIndex;
    }
};

console.log(removeDuplicates(nums))