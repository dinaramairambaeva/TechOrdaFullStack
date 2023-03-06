// 1
function cube(a){
    console.log(a**3);
}
cube(5);

// 2
function calculation(a, b, c){
    console.log((a - b) / c);
}
calculation(18, 3, 5);

// 3
function weekday(dayNumber){
    if (dayNumber == 1) console.log('Mo');
    else if (dayNumber == 1) console.log('Tu');
    else if (dayNumber == 1) console.log('We');
    else if (dayNumber == 1) console.log('Th');
    else if (dayNumber == 1) console.log('Fr');
    else if (dayNumber == 1) console.log('Sa');
    else console.log('Su');
}
weekday(4);

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'] 
// let week = (num) => arr[num - 1] 
// console.log(week(+prompt()));

// 4
function sqrt(a){
    return (a**2);
}
console.log(sqrt(9));

// 5
function isEven(a){
    if (a%2 === 0) return true;
    else return false;
}
console.log(isEven(13));

// 6
function functio(arr){
    mx = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (mx < arr[i]){
            mx = arr[i];
        }
    }
    return mx;
}
console.log(functio([1, 4, 8, 23,14, 4]));

// 7
function sumOfTwo(a, b){
    return a+b;
}
console.log(sumOfTwo(2, 6));

// 8
function minOfTwo(a, b){
    if (a > b) return b;
    else return a;
}
console.log(minOfTwo(2, 5));

// 9
function maxOfThree(a, b, c){
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else return c;
}
console.log(maxOfThree(2, 8, 5));

// 10
function copyPaste(str, num){
    for(let i = 0; i < num; i++){
        console.log(str);
    }
}
copyPaste('decode', 2);