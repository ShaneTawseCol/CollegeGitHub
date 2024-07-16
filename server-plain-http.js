const http = require('http');

// function requestHandler(request, response){
//     console.log('In Comes a request to: ' + request.url);
//     response.end('Hello, world!');
// }

//  http.createServer(requesthandler).listen(3000);

http.createServer((req, res)  =>{
    console.log('In Comes a request to: ' + req.url);
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    res.end('Hello World');
}).listen(3000);

console.log('Server running at http://localhost:3000/');