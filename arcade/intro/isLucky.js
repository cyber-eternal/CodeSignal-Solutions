/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/

function isLucky(n) {
	n = n.toString();
	const count = n.length / 2;
	let firstSum = 0;
	let lastSum = 0;
	for (let i = 0; i < count; i++) {
		firstSum += +n[i];
		lastSum += +n[n.length - 1 - i];
	}
	return firstSum === lastSum;
}
