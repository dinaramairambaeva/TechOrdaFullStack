function sm(arr){
    let s = 0;
    for (let elem of arr){
        s += elem;
    }
    return s;
}
console.log(sm([1,2,3,4,5]));

// 2
function calcLetter(str, ltr){
    let cnt = 0;
    for (let l of str){
        if (l === ltr){
            cnt++;
        }
    }
    return cnt;
}
console.log(calcLetter('we were just kids', 'w'));

// 3
function avg(massiv){
    return sm(massiv)/massiv.length;
}
console.log(avg([1, 2, 3, 4, 5]));
console.log(avg([13, 24, 35, 46]));
console.log(avg([-68, 325, 33, 40, 2, 8]));

// 4
function minimum(arr){
    let mn = arr[0];
    for (let i in arr){
        if (mn > arr[i]){
            mn = arr[i];
        }
    } 
    return mn;
}
function maximum(arr){
    let mx = arr[0];
    for (let i in arr){
        if (mx < arr[i]){
            mx = arr[i];
        }
    }
    return mx;
}
let massiv = [1, 13, 99, 440, 55]
console.log(minimum(massiv));
console.log(maximum(massiv));

// 5
function sepPosNeg(arr){
    let pos = [];
    let neg = [];
    for (let elem of arr){
        if (elem > 0){
            pos.push(elem);
        }else if (elem < 0){
            neg.push(elem);
        }
    }
    return [pos, neg];
}
let pos = sepPosNeg([-2,442,1,-6,1,563,-4])[0];
let neg = sepPosNeg([-2,442,1,-6,1,563,-4])[1];
console.log(pos, neg);

// 6
function fillEven(arr, n){
    let newArr = [];
    for(let i = 2; i <= n; i += 2){
        newArr.push(i);
    }
    return newArr;
}
function fillOdd(arr, n){
    let newArr = [];
    for(let i = 1; i <= n; i += 2){
        newArr.push(i);
    }
    return newArr;
}

let empty = [];
let a = fillEven(empty, 7);
let b = fillOdd(empty, 7);
console.log(a, b);

// 7
let longestWord = (words) => {
    let mxLen = 0;
    let longest;
    for (let word of words){
        if (mxLen < word.length){
            mxLen = word.length;
            longest = word
        }
    }
    return longest;
}
let text = "They are absolutely unstoppable";
let words = text.split(' ');
console.log(longestWord(words));

// 8
let calcOdd = (arr) =>{
    let odd = 0;
    for (let elem of arr){
        if (elem % 2 != 1){
            odd++;
        }
    }
    return odd;
}
let calcEven = (arr) =>{
    let even = 0;
    for (let elem of arr){
        if (elem % 2 == 0){
            even++;
        }
    }
    return even;
}
let arr = [2,3,1,5,6];
console.log(`четных-${calcEven(a)}, нечетных-${calcOdd(a)}`);

// 9
let season = (num) => {
    if (num > 0 && num < 3 || num == 12){
        return 'Winter';
    } else if (num < 6){
        return 'Spring';
    } else if (num < 9){
        return 'Summer';
    } else if (num < 12){
        return 'Autumn';
    } else {
        return 'Incorrect number of month';
    }
}

console.log(season(4));

// 10
function byGenre(films, genre){
    let namesOfFilms = [];
    for (let film of films){
        if (film.genre === genre){
            namesOfFilms.push(film.name);
        }
    }
    return namesOfFilms;
}
function byGenre(films, year){
    let namesOfFilms = [];
    for (let film of films){
        if (film.year === year){
            namesOfFilms.push(film.name);
        }
    }
    return namesOfFilms;
}

// 11
function changeProperty(user, property, value) {
	if (property === 'login'){
        user.login = value;
    } else if (property === 'password'){
        user.password = value;
    } else if (property === 'name'){
        user.name = value;
    } 
}

users = [
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

changeProperty(users[0], 'login', 'alice5555');
console.log(users[0].login)

// 12
function sumOfElem(arr){
    for (let i in arr){
        let sm = 0;
        for (let n of String(arr[i])){
            sm += +n; 
        }
        arr[i] = sm;
    }
    return arr;
}
console.log(sumOfElem([12,43,123,44,22]));

// 21
function dividers(num){
    let massiv = [];
    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            massiv.push(i);
        }
    }
    return massiv;
}
console.log(dividers(48));