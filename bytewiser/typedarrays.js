process.stdin.on('data', function (buf) {
    console.log(JSON.stringify(new Uint8Array(buf)))
});