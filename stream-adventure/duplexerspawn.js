var duplexer = require('duplexer'),
    spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    var cprocess = spawn(cmd, args);
    return duplexer(cprocess.stdin, cprocess.stdout);
}