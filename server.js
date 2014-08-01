var http = require('http');
var url = require('url');


function start(route, handle){

    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Received request for: "+pathname );
        route(handle,pathname,response,request);

    }
    http.createServer(onRequest).listen(8888);

    console.log("Server Started on 8888 !!");

}

exports.start = start;
