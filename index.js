var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

const testRoute = require('./src/Routes/test');
app.use('/',testRoute);

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Server running');
});
