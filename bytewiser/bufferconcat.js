var mainbuf;

process.stdin.on('data', function (buf) {
    if (mainbuf) mainbuf = Buffer.concat([mainbuf, buf]);
    else mainbuf = buf;
})

process.stdin.on('end', function () {
    console.log(mainbuf);
})