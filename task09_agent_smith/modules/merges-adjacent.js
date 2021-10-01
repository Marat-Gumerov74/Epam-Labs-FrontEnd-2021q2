function mergesAdjacent (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let left =(arr[i-1])? arr[i-1]: 0;
        let right =(arr[i+1])? arr[i+1]:0;
        newArr[i] = left + right;
    }
    return newArr;
}

module.exports = { mergesAdjacent }