const express = require('express');

const app =  express();

app.set("view engine", "ejs");
let count = 0;

app.post('/count', (req, res) => {
    count++;
    res.send({count})
})

app.get('/', (req, res) => {
    res.render("index", {count})
})

app.get('/new', (req, res) => {
    res.render("new", {count})
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})