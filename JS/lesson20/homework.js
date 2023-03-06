// 1
let num = document.getElementById('number');
function sumOfDigits(){
    let sm = 0;
    for (let d of num.value){
        sm += +d;   
    }
    console.log(sm);
}

// 2
let first = document.getElementById('first');
let second = document.getElementById('second');
function swap(){
    // let third = first.value;
    // first.value = second.value;
    // second.value = third;
    [first.value, second.value] = [second.value, first.value];
}

// 3
function changeBG(elem){
    elem.style.backgroundColor = 'red';
}

// 4
const lock = document.getElementById('lock');
const unlock = document.getElementById('unlock');
console.log(lock)

lock.onclick = function() {
    console.log(1)
    document.getElementById("test").disabled = true;
}
unlock.onclick = function() {
    document.getElementById("test").disabled = false;
}

// lock.addEventListener('click', () => {
//     console.log(1)
//     document.getElementById("test").disabled = true;
// })