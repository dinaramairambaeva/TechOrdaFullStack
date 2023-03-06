// 1
let city = {};
city['name'] = 'Berlin';
city['location'] = 'Germany';
city['name'] = 'London';
console.log(city.name, city.location);

// 2
let obj = {
    colya : 1000,
    vasya : 500,
    petya : 200
}
console.log(obj.petya, obj.colya);

// 3
var students = [
    {name: 'Eldos', surname: 'Abilov', age : 19},
    {name: 'Zhanbolat', surname: 'Turushbayev', age : 17},
    {name: 'Dinara', surname: 'Mairambayeva', age : 20}
];
for (let student of students){
    if (student.age > 19){
        console.log(student.name, student.surname);
    }
}

// 4
var students = [
    {name : 'Eldos', surname: 'Abilov', age : 19, 'grade' : 86},
    {name : 'Zhanbolat', surname: 'Turushbayev', age : 17, 'grade' : 90 },
    {name : 'Dinara', surname: 'Mairambayeva', age : 20, 'grade' : 65}
];
for (let student of students){
    if (student.grade >= 85 && student.grade <= 100){
        console.log(student.name, student.surname);
    }
}


// 5a
var student = {
    name : 'Richard',
    age : 34,
    gpa : 3.25
}
for (k of Object.keys(student)){
    console.log(`${k} : ${student[k]}`);
}

// 5b
var student = {
    name : 'Sam',
    age : 23,
    gpa : 3.55
}
for (k of Object.keys(student)){
    console.log(`${k} : ${student[k]}`);
}


// 6
var students = [
	{
		name: 'Alice',
		age: 19,
		gpa: 3.5
	},
	{
		name: 'Richard',
		age: 22,
		gpa: 2.9
	},
	{
		name: 'Sam',
		age: 20,
		gpa: 3.25
	}
]
// a
for (let student of students){
    if (student.name[0] === 'A'){
        console.log(student.name);
    }
}
// b
for (let student of students){
    if (student.gpa > 3.0){
        console.log(student.name, student.gpa);
    }
}
// c
let sumOfGpa = 0;
for (let student of students){
    sumOfGpa += student.gpa;
}
console.log(sumOfGpa / students.length);
// d
for (let student of students){
    if (student.age < 20){
        console.log(student.name, student.age);
    }
}


// 7
let employees = [
	{
		salary: 190000,
		name: 'Alice',
		deadline: true
	},
	{
		salary: 90000,
		name: 'Richard',
		deadline: true
	},
	{
		salary: 240000,
		name: 'Sam',
		deadline: false
	}
]
// a
let maxSalary = 0;
for (let employee of employees){
    if (maxSalary < employee.salary){
        maxSalary = employee.salary;
    }
}
console.log(maxSalary);
// b 
let minSalary = 100000000;
for (let employee of employees){
    if (minSalary > employee.salary){
        minSalary = employee.salary;
    }
}
console.log(minSalary);
// c
for (let employee of employees){
    if (employee.salary < 100000){
        employee.salary += 20000;
    }
    console.log(employee.name, employee.salary);
}

// 8
let users = [
	{
		login: 'alice19',
		password: 'alice19',
		name: ''
	},
	{
		login: 'richard18',
		password: 'richard18',
		name: 'Richard'
	},
	{
		login: 'sam22',
		password: '',
		name: 'Sam'
	}
]
for (let i in users){
    if (users[i].login == '' || users[i].password == '' || users[i].name == ''){
        users.splice(i, 1);
    }
}
console.log(users);

// 8 
users = users.filter(item => item.login != '' && item.password != '' && item.name != '')
console.log(users);