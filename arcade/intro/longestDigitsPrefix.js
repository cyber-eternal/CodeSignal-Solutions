/*

Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".

*/

function solution(inputString) {
    return inputString.match(/^\d*/)[0]
}
