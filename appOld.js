const http = require('http');
const { request } = require('https');

const hostname = '127.0.0.1';
const port = 3000;
const routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('Root');
    },
}

const server = http.createServer((request, response) => {
    if(request.url in routes) {
        return routes[request.url](request, response);
    }

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});