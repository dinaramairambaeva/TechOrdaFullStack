const http = require('http');
const arr = require('./data/mydata');
const {findArraySum, findOddNumbers} = require('./common/array_methods');

const server = http.createServer((req, res) => {   
    if (req.url === '/') {
        res.end('Hello Decode');
    }   
})

server.on('request', (req, res) => {
    if (req.url === '/learn'){
        res.end('I`m learning NodeJS modules');
    }
})

server.on('request', (req, res) => {
    if (req.url === '/array'){
        res.end(JSON.stringify(arr));
    }
})

server.on('request', (req, res) => {
    if (req.url === '/array-sum'){
        res.end(String(findArraySum(arr)));
    }
})

server.on('request', (req, res) => {
    if (req.url === '/array-odds'){
        res.end(JSON.stringify(findOddNumbers(arr)));
    }
})

const PORT = 3001;
server.listen(PORT, () =>{
    console.log('server started');
})