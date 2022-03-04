function solution(st) {
	if (isPalindrome(st)) return st;
	for (var i = 0; i < st.length; i++) {
		if (isPalindrome(st.slice(i, st.length))) {
			return st + Array.from(st.slice(0, i)).reverse().join('');
		}
	}
}

function isPalindrome(string) {
	return string == Array.from(string).reverse().join('');
}
