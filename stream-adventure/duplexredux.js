var duplexer = require('duplexer');


module.exports = function (counter) {
    process.stdin.pipe(process.stdout);
    return duplexer(counter, process.stdout);
}