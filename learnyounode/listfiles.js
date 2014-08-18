var fs = require('fs'),
  path = require('path');


var filename = process.argv[2],
    ext = process.argv[3];

fs.readdir(filename, function (error, list) {
    if (!error) {
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == ("."+ext)) {
                console.log(list[i]);
            }
        }
    }
})