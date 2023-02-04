/*

Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
solution(n) = 99.

*/


function solution(n) {
  return Math.pow(10, n) - 1
}
