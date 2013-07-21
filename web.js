var express = require('express');
var fs = require('fs');
var str = fs.readFileSync('index.html');
var buf = new Buffer(str, 'utf8');

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
