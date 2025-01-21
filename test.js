var http = require('http');
var mydt = require('./mymod');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(mydt.myDate()+ " xxxx ");
  res.end('Hello Node! ');
}).listen(8888);