var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    fs.createReadStream(process.argv[3]).pipe(response);
}).listen(process.argv[2]);