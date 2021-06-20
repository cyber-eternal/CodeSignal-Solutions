/*

Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".


*/

function commonCharacterCount(s1, s2) {
	for (var i = 0; i < s1.length; i++) {
		s2 = s2.replace(s1[i], '!');
	}
	return s2.replace(/[^!]/g, '').length;
}
