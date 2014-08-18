var net = require('net');


net.createServer(function (socket) {
    var date = new Date();
    var content = date.getFullYear() + "-";
    if (date.getMonth() < 9) {
        content += "0" + (date.getMonth() + 1);
    } else {
        content += (date.getMonth() + 1);
    }
    if (date.getDate() < 10) {
        content += "-0" + date.getDate();
    } else {
        content += "-" + date.getDate();
    }
    content += " " + date.getHours() + ":" + date.getMinutes();
    socket.write(content);

}).listen(process.argv[2]);