var through = require('through');
var split  = require('split');
process.stdin.pipe(split()).pipe(through(write, end)).pipe(process.stdout);
var isOdd = true;
function write(buf){
    
    if(isOdd){

        this.queue(buf.toString().toLowerCase()+"\n");
    }else{
        this.queue(buf.toString().toUpperCase()+"\n");
    }
    isOdd = !isOdd;
}

function end(){
    this.queue(null);
}