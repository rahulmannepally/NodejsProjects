// const http = require('http');

const express = require('express');

// const routes = require('./routes');

const app = express();
app.use('/',(req, res, next)=>{
    res.send('Always Runs');
});

// console.log(routes.someText)
app.use('/add-product',(req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>The add</h1>');
    next();//Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from express</h1>');
});

// const server = http.createServer(app);
app.listen(3000);