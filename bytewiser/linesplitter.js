var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, null, function (error, buf) {
    if (!error) {
        var start = 0;
        var end = 0;
        for (i = 0; i < buf.length; i++) {
            if (buf[i] == 10) {
                end = i;
                console.log(buf.slice(start, end));
                start = end + 1;
            }
        }
        console.log(buf.slice(start, buf.length));
    }
});
