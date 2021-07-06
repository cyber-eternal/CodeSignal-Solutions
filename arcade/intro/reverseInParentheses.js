function reverseInParentheses(inputString) {
    if (inputString.includes('(')){
        return reverseInParentheses(reverseOnce(inputString));
    } else {     
        return inputString;
    }
}

function reverseOnce(s){
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}
