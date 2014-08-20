var crypto = require('crypto');


process.stdin.on('data', function (s) {
    var stream = crypto.createDecipher('aes256', process.argv[2])
    stream.pipe(process.stdout);
    stream.write(s);
    stream.end();
})

process.stdin.on('end', function () {
    
   
   
})



