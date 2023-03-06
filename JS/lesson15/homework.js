// 1
var a = +prompt('enter a');
var b = +prompt('enter b');
if (a <= 1 && b >= 3) console.log(a + b);
else console.log(Math.abs(a-b));


// 2
let num = +prompt('enter a num');
if (num >= 0 && num < 15) console.log('first quarter');
else if (num < 30) console.log('second quarter');
else if (num < 45) console.log('third quarter');
else console.log('fourth quarter');


// 3
let f = +prompt('enter a salary');
let s = +prompt('enter a salary');
let t = +prompt('enter a salary');

if (f > s && s > t) console.log(f - t);
else if (s > f && f > t) console.log(s - t);
else if (f > t && t > s) console.log(f - s);
else if (t > f && f > s) console.log(t - s);
else if (s > t && t > f) console.log(s - f);
else console.log(t - f);


// 4
var a = +prompt('enter a');
var b = +prompt('enter b');

if (a > 0 && b > 0){
    console.log(a**2*b**2);
} else if(a > 0 || b > 0){
    console.log(a/b+a*b);
} else {
    console.log(a+b);
}


// 5
var a = +prompt('enter a');
var b = +prompt('enter b');
var c = +prompt('enter c');
if (a <=b && b<= c){
    a = Math.max(a,b,c);
    b = c = a;
} else if (a>b && a>c){
    a **= 2;
    b **= 2;
    c **= 2;
} else {
    a *= -1;
    b *= -1;
    c *= -1;
}
console.log(a, b, c);


// 6
const login = 'admin';
const password = 'secret';
let log = prompt('login');
let pass = prompt('password');

if (log === login && pass === password){
    console.log('Вы успешно авторизировались');
} else if (log !== login) {
    console.log('Пользователя с данным логином не зарегистрирован');
} else {
    console.log('Вы неверно ввели пароль');
}


// 7
var a = +prompt('a')
if (a === 5 || a === 10 || a === 14 || a === 100){
    console.log(a**3)
} else {
    console.log(Math.abs(a))
}


// 8
numbr = +prompt('number');
if (numbr % 11 === 0){
    a += 20;
} else if (numbr > 0 && numbr % 2 === 0){
    a -= 5;
} else {
    a **= 2;
}
console.log(a);


// 9
var a = +prompt('enter a');
var b = +prompt('enter b');
var c = +prompt('enter c');

if (a > b && b > c){
    console.log(b);
} else if (a > c && c > b){
    console.log(c);
} else {
    console.log(a);
}


// 10
var a = +prompt('enter a');
var b = +prompt('enter b');
var c = +prompt('enter c');
let cnt = 0;
if (a > 0){
    cnt += 1;
}
if (b > 0){
    cnt += 1;
}
if (c > 0){
    cnt += 1;
}
console.log(cnt);


// 11
let st = prompt('enter a string');
if (st[0] === 'a'){
    console.log('yes');
} else {
    console.log('no');
}


// 12
let nm = prompt('enter a number');
if (nm[0] == '1' || nm[0] == '2' || nm[0] == '3'){
    console.log('yes');
} else {
    console.log('no');
}