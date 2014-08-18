var http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding("UTF-8");
    response.on("data", function (data) {
        console.log(data);
    })
})