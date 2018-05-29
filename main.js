var http = require("http");


http.createServer(function(request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'})
	response.end('amarillo\n')
}).listen(8081);

console.log('running at localhost:8081');