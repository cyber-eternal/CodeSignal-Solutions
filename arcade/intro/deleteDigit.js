/*

Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.

*/

function solution(n) {
    let m = 0;
    for(let d = 1; d <= n; d *= 10){
        const t = n % d + (Math.floor(Math.floor(n/d) / 10) * d)
        m = Math.max(m, t);
    }
    return m;
}
