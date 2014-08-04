var querystring = require('querystring'),
    fs          = require('fs'),
    formidable  = require("formidable");

function start(response, request) {
    console.log("Start !!");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post" enctype="multipart/form-data">' +
        '<input type="file" name="upload"/>  </br>' +
        '<input type="submit" value="Submit file" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead('200', {'Content-type': 'text/html'});
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log("Upload !!");
    var fileName = "C:/TMEMM13/snapshots/tmp.png",
        form = formidable.IncomingForm();
    console.log("about to parse file !");
    form.parse(request, function (error, fields, files) {
        console.log("parsing done !");
        fs.rename(files.upload.path, fileName, function (error) {
            if (error) {
                fs.unlink(fileName);
                fs.rename(files.upload.path, fileName);
            }
        });
    });
    response.writeHead('200', {'Content-type': 'text/html'});
    response.write("Received image ");
    response.write('<img src="/show"/>');
    response.end();
}

function show(response, request) {
    console.log("Show !!");
    response.writeHead('200', {'Content-type': 'image/png'});
    fs.createReadStream("C:/TMEMM13/snapshots/tmp.PNG").pipe(response);
}

function dd(response,requyest){

}



exports.start = start;
exports.upload = upload;
exports.show = show;
