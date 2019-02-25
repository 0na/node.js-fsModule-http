var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function (err, html) {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.write(html);
            response.end();
        });
    } else {
        fs.readFile('./404.jpg', function (err, img) {
            response.writeHead(404, {
                'Content-Type': 'image/jpeg'
            });
            response.write(img);
            response.end();
        })
    }
}).listen(9000);