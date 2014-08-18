var http = require("http");

http.get(process.argv[2], function (response) {
    response.setEncoding("UTF-8");
    var content = "";

    response.on("data", function (data) {
        content += data;
    })

    response.on("end", function () {
        console.log(content.length);
        console.log(content);
    })

})