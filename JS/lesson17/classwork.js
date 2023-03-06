// 1
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
for (let j in arr){
    console.log(arr[j]);
}
for (let n of arr){
    console.log(n);
}

// 2
var arr = [2, 3, 4, 5];
pr = 1
for (let i = 0; i < arr.length; i++){
    pr *= arr[i];
}
console.log(pr);

// 3
var arr = [2, 5, 9, 15, 0, 4];
for (let n of arr){
    if (n < 10 && n > 3){
        console.log(n);
    }
}

// 4
var arr = [2, 15, -9, -5, 0, -4, 43];
let sm = 0;
for (let n of arr){
    if (n > 0){
        sm += n;
    }
}
console.log(sm)

// 5
var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let n of arr){
    if (n == 4){
        console.log('Yes');
        break;
    }
}

// 6
let weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
for (let n in weekdays){
    if (n == 6 || n == 7){
        weekdays[n].bold();
    }
    console.log(weekdays[n]);
}

// 7
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.slice(0, 3);
console.log(arr2);

// 8
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.slice(3, 5);
console.log(arr2);

// 9
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// 10
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.splice(1, 3);
console.log(arr);

// 11
number = prompt('enter a number');
mx = -1;
for (let n of number){
    if (mx < n){
        mx = n;
    }
}
console.log(mx);