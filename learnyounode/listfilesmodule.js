var fs = require('fs'),
  path = require('path');

module.exports = function (filename, ext, callback) {
    fs.readdir(filename, function (error, list) {
        if (!error) {
            var data = [];
            for (var i = 0; i < list.length; i++) {
                if (path.extname(list[i]) == ("." + ext)) {
                    data.push(list[i]);
                }
            }
             callback(null, data);
        } else {
            callback(error)
        }
    })

}


