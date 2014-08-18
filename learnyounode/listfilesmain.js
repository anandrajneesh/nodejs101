var listfiles = require("./listfilesmodule");


listfiles(process.argv[2], process.argv[3], function (error, data) {
    if (error) {
        console.log("Some error occured while listing files " + error);
    } else {
        data.forEach(function (dat) {
            console.log(dat);
        });
    }

});