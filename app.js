var router = require('./router.js');
var express = require('express');
var app = express();



//router.route();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(9527, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app start listening at http://%s:%s', host, port);
});
