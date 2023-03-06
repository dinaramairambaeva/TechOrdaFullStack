// 1
let hour = prompt('hour')
let min = prompt('min')
let sec = prompt('sec')
console.log(`${hour}:${min}:${sec}`)

// 2
var a = prompt('a')
var b = prompt('b')
var c = a
a = b
b = c
console.log(`a = ${a}, b = ${b}`)

// 3
let str = 'abcde'
console.log(str[0])
console.log(str[1])
console.log(str[4])

// 4
var a = prompt('Enter one side of triangle')
var b = prompt('Enter one side of triangle')
console.log(Math.sqrt(a**2 + b**2))

// 5
let age = prompt('Enter your age')
console.log(`Мне ${age} лет!`)

// 6
let name = prompt('Enter your Name')
console.log(`Welcome ${name}`)

// 7
var a = +prompt('a')
var b = +prompt('b')
var c = +prompt('c')
console.log(a-b-c)

// 8
var a = +prompt('a')
var b = +prompt('b')
var c = +prompt('c')
console.log(a*2 + b/3 + c**2)

// 9
var t = prompt('temperature')
console.log((9/5 * t) + 32)

// 10
var a = +prompt('a')
var b = +prompt('b')
var c = +prompt('c')
console.log(a**2 + 3*b**3 + 3*a*b + c**2)