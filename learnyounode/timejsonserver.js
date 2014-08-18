var http = require('http'),
    url = require('url');

http.createServer(function (request, response) {
    var parsedReq = url.parse(request.url, true);
   
    if (parsedReq.pathname == '/api/parsetime') {   
        var date = new Date(parsedReq.query['iso']);
        var content = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
         response.writeHead(200, { 'Content-type': 'application/json' });

    response.write(JSON.stringify(content));
    response.end();

    }
    else if (parsedReq.pathname == '/api/unixtime') {
      
          var date = new Date(parsedReq.query['iso']);
       var content = { unixtime: date.getTime() };
         response.writeHead(200, { 'Content-type': 'application/json' });
    response.write(JSON.stringify(content));
    response.end();
    }
   

}).listen(process.argv[2]);