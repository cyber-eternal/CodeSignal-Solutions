function arrayMaximalAdjacentDifference(inputArray) {
 return inputArray.reduce((max, el, i, inArr) => {
        const diff = Math.abs(el - inArr[i+1]);
        return diff > max ? diff : max;
    }, 0)
}
