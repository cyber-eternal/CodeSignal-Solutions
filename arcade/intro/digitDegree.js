/*

Codewriting

300

Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

*/

function solution(n) {
	let counter = 0;

	for (let sum = 0; (n + '').length > 1; counter++, sum = 0) {
		for (let e of n + '') sum += parseInt(e);
		n = sum;
	}

	return counter;
}
