var express = require('express');
var app = express();

var hostname = '127.0.0.1';
var currentPort = 8080;

console.log(`Welcome port: ${currentPort} will be ready shortly`);


app.use(express.static('./'))


var server = app.listen(currentPort, hostname, function () {
    console.log(`Server running at http://${hostname}:${currentPort}/`);
    console.log('Express server listening on port %s.', currentPort);
    console.log('Thanks for waiting... the app is ready for action.')
});
