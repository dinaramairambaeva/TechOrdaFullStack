// 1
for (let i = 0; i<= 100; i++){
    console.log(i);
}

// 2
for (let i = 11; i <= 33; i++){
    console.log(i);
}

// 3
for (let i = 0; i<= 100; i += 2){
    console.log(i);
}

// 4
var sm = 0;
for (let i = 0; i<= 100; i++){
    sm += i;
}
console.log(sm)

// 5
var sm = 0;
for (let i = 1; i<= 10; i++){
    sm += i;
}
console.log(sm/10)

// 6
for (let i = 10; i<= 20; i++){
    console.log(i**2)
}

// 7
let even = 0;
let odd = 0;
for (let i = 24; i<= 97; i++){
    if (i % 2 === 0){
        even += 1
    } else {
        odd += 1
    }
}
console.log(even, odd)

// 8
num = +prompt()
for (let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`)
}