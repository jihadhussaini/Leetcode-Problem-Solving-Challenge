/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

let nums = [4,1,2,1,2]

// bit wise -> concept of XOR
var singleNumber = function(nums) {
    
    let single = 0;
    for (let i = 0; i < nums.length; i++) {
        single = single ^ nums[i];
    } 
    return single;
};

// counter with extra memory
var singleNumber = function(nums) {
    
    let frequencyCounter1 = {};
    for (let val of nums) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        
    }
    for (let key in frequencyCounter1) { 
        if (frequencyCounter1[key] == 1)
        return key
    } 
};

console.log(singleNumber(nums))