var concat_stream = require('concat-stream');

process.stdin.pipe(concat_stream(function (body) {
    console.log(body.toString().split('').reverse().join(''));

}));