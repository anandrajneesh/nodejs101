var http = require('http');

var responseData = {};

function printAll(){
    if(responseData.hasOwnProperty('1') && responseData.hasOwnProperty('2') && responseData.hasOwnProperty('3')){
        console.log(responseData['1']);
        console.log(responseData['2']);
        console.log(responseData['3']);
    }
}


function callback(i){
    return function (response) {
        response.setEncoding('UTF-8');
        var content = "";
        response.on('data', function (data) {
            content += data;
        });

        response.on('end', function () {
            responseData[i]= content;
            printAll();
        });
    };
}


http.get(process.argv[2], callback('1'));
http.get(process.argv[3], callback('2'));
http.get(process.argv[4], callback('3'));