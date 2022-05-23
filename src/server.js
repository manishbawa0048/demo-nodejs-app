var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end( <html-include src="my-html.html"></html-include> );

});

var port = 3000;
server.listen(port);
module.exports = server
console.log("Server is available on Port:", port);
