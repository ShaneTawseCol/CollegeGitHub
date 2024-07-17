const connect = require('connect');


const app = connect();



function logger(request, response, next){
console.log(request.method, request.url)
next();
}


function goodbyeWorld(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.end('Goodbye World');
}


function helloWorld(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
}

app.use(logger);
app.use("/goodbye",goodbyeWorld);
app.use("/",helloWorld);
app.listen(3000);

console.log('Server running at http:/localhost:3000/');