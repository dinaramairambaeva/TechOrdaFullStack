// 1
var num = +prompt('enter a number');
if (num % 2 === 0) console.log(`${num} is even number`);
else console.log(`${num} is odd number`);


// 2
var num = +prompt('enter a number');
if (num > 0) console.log(`${num} is positive number`);
else if (num < 0) console.log(`${num} is negative number`);
else console.log(`${num} is zero`);


// 3
var num = +prompt('enter your age');
if (num >= 18) console.log('Congratulations, you can vote!');
else console.log('Sorry, you cannot vote!');


// 4
var num = +prompt('enter your height');
if (num >= 120) console.log('Congratulations, you\'re high enough');
else console.log('Sorry, you have to grow a little bit');


// 5
let a = +prompt('enter a');
let b = +prompt('enter b');
let c = +prompt('enter c');
console.log(`1-е число = ${a}, 2-е число = ${b}, 3-е число = ${c}`);
if (a>b && a>c){
    console.log(`1-е число - наибольшее из трех.`);
} else if (b>a && b>c){
    console.log(`2-е число - наибольшее из трех.`);
} else {
    console.log(`3-е число - наибольшее из трех.`);
}


// 6
let t = +prompt('temperature');
if (t<0) console.log('Морозная погода');
else if (t<10) console.log('Очень холодная погода');
else if (t<20) console.log('Холодная погода');
else if (t<30) console.log('Нормальная температура');
else if (t<40) console.log('Жарко');
else console.log('Очень жарко');


// 7
let alpha = +prompt('enter alpha');
let beta = +prompt('enter beta');
let gamma = +prompt('enter gamma');
if (alpha + beta + gamma === 180) console.log('It is triangle');
else console.log('It is not triangle');


// 8
let symbol = prompt('enter a symbol');

if (symbol <= '9' && symbol >= '0'){
    console.log('it is a number');
}else if (symbol < 'z' && symbol >'a' || symbol < 'Z' && symbol >'A'){
    console.log('it is a letter');
} else {
    console.log('it is a special symbol');
}

// 9
let letter = prompt('enter a letter');
if (letter < 'z' && letter >'a' || letter < 'Z' && letter >'A'){
    switch(letter){
        case 'a':
        case 'o':
        case 'e':
        case 'i':
        case 'u':
        case 'y':
            console.log('it is glasniy');
            break;
        default:
            console.log('it is soglasniy');
    }
} else {
    alert('Enter a LETTER!!!')
}


// 10
let grade = prompt('enter a grade');

switch(grade.toUpperCase()){
    case 'E':
        console.log('Excellent');
        break;
    case 'V':
        console.log('Very Good');
        break;
    case 'G':
        console.log('Good');
        break;
    case 'A':
        console.log('Average');
        break;
    case 'F':
        console.log('Fail');
        break;
    default:
        console.log('Enter normal grade, please!')
}