// 1
var arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

// 2
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);

// 3
var len = +prompt('number');
var arr = [];
for (let i = 0; i < len; i++){
    var elem = prompt('elem'); 
    arr.push(elem);
}
for (let elem of arr){
    console.log(elem);
}

// 4
var len = +prompt('number');
var arr = [];
for (let i = 0; i < len; i++){
    var elem = prompt('elem'); 
    arr.unshift(elem);
}
for (let elem of arr){
    console.log(elem);
}

// 5
var len = +prompt();
var arr = [];
let sm = 0;
for (let i = 0; i < len; i++){
    var elem = prompt(); 
    sm += +elem;
}
console.log(sm);

// 6
var arr = [1, 2, 3, 4, 5];
let index = +prompt('from 0 to 4');
arr.splice(index, 1);
console.log(arr)

// 7
var arr = [2, 4, 1, 5, 8];
var mx = -1;
for (let i in arr){
    if (i % 2 == 0 && mx < arr[i]){
        mx = arr[i];
    }
}

// 8
var arr = [2, 4, 1, 5, 8];
var sum = 0;
for (let n of arr){
    sum += n;
}
let avg = sum / arr.length;
for (let n of arr){
    if (n > avg){
        console.log(n)
    }
}

9
var arr=[2,3,1,7,8,9];
var mx = -1;
var mn = 1000;
let mxi;
let mni;
for (let i in arr){
    if (mx < arr[i]){
        mx = arr[i];
        mxi = +i;
    }
    if (mn > arr[i]){
        mn = arr[i];
        mni = +i;
    }
}
for (let i = mni+1; i < mxi; i++){
    console.log(arr[i]);
}

// 10
var arr = [2, 4, -10, -1, -8, 6];
for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

// 11
var arr = [2, 4, -10, -1, 8, 6];
var mx = -11111;
let mi;
for (let i = 0; i < arr.length; i++){
    if (mx < arr[i]){
        mx = arr[i];
        mi = +i;
    }
}
console.log(mx, mi);

// 12
let num = prompt('number')
var sum = 0;
for (let n of num){
    sum += +n;
}
let avr = sum / num.length;
console.log(avr)