/* 

Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

*/

function allLongestStrings(inputArray) {
  const maxSize = Math.max(...inputArray.map(x => x.length));
  return inputArray.filter(x => x.length === maxSize);
}

