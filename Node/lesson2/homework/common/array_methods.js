let findArraySum = (arr) => {
    let sum = 0;
    for(item of arr){
        sum += +item;
    }
    return sum;
}

let findOddNumbers = function(arr) {
    let odds = [];
    for(item of arr){
        if (+item % 2 == 1){
            odds.push(item);
        }
    }
    return odds;
}

module.exports = {findArraySum, findOddNumbers}