function arrayChange(inputArray) {
    let moves = 0
    for(let i = 1; i < inputArray.length; i++) {
        while(inputArray[i] <= inputArray[i-1]) {
            inputArray[i] += 1;
            moves += 1
        }
    }
    return moves;
}
