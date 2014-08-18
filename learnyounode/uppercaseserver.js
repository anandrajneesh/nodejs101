var http = require('http'),
throughMap = require('through2-map'),
qs = require('querystring');

http.createServer(function (request, response) {

    var content = '';

    request.on('data', function (data) {
        content += data;
    })

    request.on('end', function () {
        response.write(content.toUpperCase());
        response.end();
    })


}).listen(process.argv[2]);