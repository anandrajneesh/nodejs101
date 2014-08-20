var http = require('http'),
through = require('through');


http.createServer(function (request, response) {
    if (request.method == 'POST') {
        request.pipe(through(write)).pipe(response);
    } else {
        response.end('Sendme a post');
    }
}).listen(process.argv[2]);

function write(buf){
    this.queue(buf.toString().toUpperCase());
}