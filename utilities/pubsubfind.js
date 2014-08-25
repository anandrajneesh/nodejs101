/**
 * Created by Anand_Rajneesh on 8/23/2014.
 */
var fs  = require('fs'),
    dir = process.argv[2],
    split = require('split'),
    through = require('through')
    resultsStream = fs.createWriteStream("../pubusubresults.txt");

var pstats = {'files' : 0};
var results = [];

function readDir(directory){
    console.log('Reading directory: '+directory)
    fs.readdir(directory,function(error,files){
        if(!error){
            pstats.files = pstats.files + files.length;
            files.forEach(function(file){
                fs.lstat(directory+"/"+file,function(error,stats){
                    if(!error) {
                        console.log("Stats : " + file + " " + stats.isDirectory());
                        if(stats.isDirectory()){
                            pstats.files = pstats.files - 1;
                            readDir(directory+"/"+file);
                        }else{

                            var jsStream = fs.createReadStream(directory+"/"+file,{'encoding':'UTF-8'});
                            jsStream.pipe(split("\n")).pipe(through(function(buf){
                                var content = buf.toString();
                                if(content.indexOf('PubSub') > 1) {

                                    var subsI = content.indexOf('PubSub.subscribe(');
                                    var pubsI = content.indexOf('PubSub.publish(');
                                    var topic = "";
                                    var type = "";
                                    if(subsI > -1){
                                        topic = content.slice(subsI+17,content.indexOf(',')).replace(/"/g,"").replace(/'/g,"");
                                        type = "subscribe";
                                    }else if(pubsI > -1){
                                        topic = content.slice(pubsI+15,content.indexOf(',')).replace(/"/g,"").replace(/'/g,"");
                                        type = "publish";
                                    }
                                    if(topic !== ""){
                                        var writeAble = {topic : topic, file : file, type : type};
                                        resultsStream.write(JSON.stringify(writeAble)+ "\n");
                                        results.push(writeAble);
                                    }

                                }
                            },function(){
                                pstats.files = pstats.files - 1;
                                if(pstats.files === 0){
                                    console.log('Finished');
                                    resultsStream.write(JSON.stringify(reduceResults()));
                                    resultsStream.end();

                                }
                            }));
                        }

                    }
                    else console.error("lstat error "+ file  + " "+error)
                })
            })
        }else{
            console.error("Error while reading directory "+directory + " "+error);
        }

    });
}

function reduceResults(){
    function reduce(acc,array){
        if(array.length == 0) return acc;
        else{
            var elem = array[0];
            var nw = true;
            var newacc = acc.map(function(e){
                if(e.topic == elem.topic){
                    if(elem.type == 'subscribe'){
                        e.subscribe.push(elem.file);
                    }else if(elem.type == 'publish'){
                        e.publish.push(elem.file);
                    }
                    nw = false;
                }
                return e;
            });
            if(nw){
                if(elem.type == 'subscribe'){
                    newacc.push({topic:elem.topic,subscribe:[elem.file],publish:[]});

                }else if(elem.type == 'publish'){
                    newacc.push({topic:elem.topic,subscribe:[],publish:[elem.file]});
                }
            }
            return reduce(newacc,array.slice(1));
        }
    }
    return reduce([],results);
}


readDir(dir);




