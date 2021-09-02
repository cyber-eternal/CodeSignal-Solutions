/*

Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase English characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 1000.

[output] string

The resulting string after replacing each of its characters.

*/


function alphabeticShift(inputString) {
    const chars = [];
    for(let c of inputString) {
        chars.push(c === 'z' 
            ? 'a'
            : String.fromCharCode((c.charCodeAt(0) + 1)));
    }
    return chars.join("");
}
