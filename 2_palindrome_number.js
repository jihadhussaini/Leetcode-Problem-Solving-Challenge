/*
Given an integer x, return true if x is a palindrome
, and false otherwise.

example 1 :
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

example 2 :
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/

// let x = -121;
let x = 1221;
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10 && x > 0) return true;
    let string = x.toString();
    let i = 0;
    let j = string.length - 1;
    while (i < j) {
        console.log("i", i)
        console.log("j", j)
        console.log("string[i]", string[i])
        console.log("string[j]", string[j])
        if (string[i] !== string[j]) return false;
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome(x))