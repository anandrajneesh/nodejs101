var 
tar = require('tar'),
zlib = require('zlib'),
crypto = require('crypto'),
through = require('through'),
parser = tar.Parse(),
unzipStream = zlib.createGunzip();

var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);


parser.on('entry', function (entry) {
    if (entry.type !== 'File') return;

    var cipher = crypto.createHash('md5', { 'encoding': 'hex' });
    var end = function () {
        this.queue(" " + entry.path + "\n");
    };
    entry.pipe(cipher).pipe(through(null, end)).pipe(process.stdout);

});


process.stdin
    .pipe(decipher)
    .pipe(unzipStream)
    .pipe(parser);