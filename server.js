var http = require('http');
var url = require('url');

function start(route){

    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        route(pathname);
        console.log("Received request for "+pathname );
        response.writeHead(200, {'Content-type':'text/plain'});
        response.write("This app is running fine");
        response.end();
    }

    http.createServer(onRequest).listen(8888);

}

exports.start = start;
