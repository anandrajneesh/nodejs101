var trumpet = require('trumpet'),
    through = require('through'),
    tr      = trumpet();


process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();

stream.pipe(through(function (data) {
    this.queue(data.toString().toUpperCase());
})).pipe(stream);