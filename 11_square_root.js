/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/
let x = 26

var mySqrt = function(x) {

    // binary search
    let first = 0;
    let last = x;

    if (x <= 1 && x >= 0) {
        return x
    }

    while (first < last) {
        let mid = Math.floor((last + first)/ 2);
        let square = mid * mid;
        if (square == x) {
            return mid
        }
        if (square > x) {
            last = mid;
        } 
        if (square < x) {
            first = mid + 1;
        }
    }

    if (first == last){
        return last-1
    }
};

console.log(mySqrt(x))