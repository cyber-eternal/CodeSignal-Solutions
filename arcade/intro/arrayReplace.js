/*

Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

*/

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(i => i === elemToReplace ? substitutionElem : i)
}
