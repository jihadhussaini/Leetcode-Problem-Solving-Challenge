/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
let s = "MCMXCIV";

const romanToInt = function (s) {
    let romanInteger = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let sum = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "M" && romanInteger[s[i]] < romanInteger[s[i + 1]]) {
        sum += romanInteger[s[i + 1]] - romanInteger[s[i]];
        i++;
      } else {
        sum += romanInteger[s[i]];
      }
    }
    return sum;
  };

console.log(romanToInt(s))