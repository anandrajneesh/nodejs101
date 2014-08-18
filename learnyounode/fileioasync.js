var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, 'UTF-8', function(error, data){
	if(!error) console.log(data.split("\n").length - 1);
});
