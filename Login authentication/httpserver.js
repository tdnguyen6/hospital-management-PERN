const http = require('http')

var route = {
	"/": function mainsite(request, response) {
		response.writeHead(200);
		response.end("You are viewing the main site");
	},
	"/login": function loginSite(request, response) {
		response.writeHead(200);
		response.end("You are viewing the login site");
	}
	
}

http.createServer( (request, response) => {
	if (request.url in route) return route[request.url](request, response);
	
	response.writeHead(404);
	response.end(http.STATUS_CODES[404]);
}).listen(3000);