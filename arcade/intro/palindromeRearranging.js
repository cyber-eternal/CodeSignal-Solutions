function palindromeRearranging(inputString) {
    const regExp = /(\w)\1/g;
    const outStr = inputString.split("").sort().join("").replace(regExp, "");
    return (outStr.length <= 1);
}
