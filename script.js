"use strict";

var fs = require("fs"); //modul fs- odpowiada za zapis(fs.writeFile i odczyt fs.readFile)
var http = require("http");
var server = http.createServer();

server
  .on("request", function(request, response) {
    if (request.method === "GET" && request.url === "/") {
      fs.readFile("./index.html", function(err, html) {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.write(html);
        response.end();
      });
    } else {
      fs.readFile("./error.jpg", function(err, img) {
        response.writeHead(404, { "Content-Type": "image/jpg" });
        response.write(img);
        response.end();
      });
    }
  })
  .listen(9000);
