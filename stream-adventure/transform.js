var through = require('through');

process.stdin.pipe(through(write, end)).pipe(process.stdout);

function write(buf){
    this.queue(buf.toString().toUpperCase());
}

function end(){
    this.queue(null);
}