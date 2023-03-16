const fs = require('fs');
const path = require('path')

// fs.writeFileSync('text.txt', 'Created by Node.js and fs', 'utf-8'); 
// console.log(fs.readFileSync('text.txt', 'utf-8'));

// fs.writeFileSync(path.join('main', 'abc.txt'), 'Created by Node.js and fs in main', 'utf-8'); 
// console.log(fs.readFileSync(path.join('main', 'abc.txt'), 'utf-8'))

fs.writeFileSync(path.join(__dirname, 'abc.txt'), 'Created by Node.js and fs in main', 'utf-8'); 
console.log(fs.readFileSync(path.join(__dirname,'..', 'text.txt'), 'utf-8'));