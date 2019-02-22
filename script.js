"use strict"

var fs = require('fs'); //modul fs- odpowiada za zapis(fs.writeFile i odczyt fs.readFile)
var http = require('http');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'photo/jpg; charset=utf-8');
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            response.write(data);
        });
        response.end();
    } else {
        fs.readFile('./photo.jpg', function (err, data) {
            response.write(data);
        })
        //fs.readFile('./photo.jpg', function (err, data) {
        //	response.write('<img src="./photo.jpg">');
        //})

        //readFileSync ????? co to
        response.end();
    }
})
server.listen(5500);
//http://localhost:5500