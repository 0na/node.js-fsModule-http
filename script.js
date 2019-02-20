"use strict"

var fs = require('fs'); //modul fs- odpowiada za zapis(fs.writeFile i odczyt fs.readFile)
var http = require('http');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            response.write(data);
        });
        response.end();
    } else {
        fs.readFile('.photo.jpg', function (err, data) {
            response.write('.photo.jpg');
        })
        response.end();
    }
})
server.listen(8080);
//http://localhost:8080