// 1
var arr = ["Есть", "жизнь", "на", "Марсе"];
let arrLength = arr.map(item => item.length);
console.log(arrLength);

// 2
var arr = [-1, 2, -3, 4, -5, 6];
let arrPos = arr.filter(item => item > 0);
console.log(arrPos);

// 3
let arrNeg = arr.filter(item => item < 0);
console.log(arrNeg.length);

// 4
let allPos = arr.every(item => item > 0);
console.log(allPos);

// 5
let someNeg = arr.some(item => item < 0);
console.log(someNeg);

// 6
let users = [
  {id: 11, name: 'Adam', age: 23, group: 'editor'},
  {id: 47, name: 'John', age: 28, group: 'admin'},
  {id: 85, name: 'Alex', age: 34, group: 'editor'},
  {id: 97, name: 'Oliver', age: 29, group: 'admin'}
];

let usersA = users.filter(item => item.name.startsWith('A'));
console.log(usersA);

// 7
let someAdmin = users.some(user => user.group == 'admin');
console.log(someAdmin);

// 8
let names = users.filter(user => user.age >= 25 && user.age <= 30).map(user => user.name);
console.log(names);

// 9
let users9 = users.filter(user => user.id % 5 == 0 && user.age > 30);
console.log(users9.length);

// 10
let adminsDot = users.filter(user => user.group == 'admin').map(item => ({...item, name: item.name + "."}));
console.log(adminsDot);