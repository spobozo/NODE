const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");    
   response.write("<h2>Payton Morris - s31k237</h2> \
		   <p>Running node server on port 3023</p>");
   response.write("<a href='https://github.com/spobozo/NODE'>Code on github</a>");
   response.end();
}).listen(3023);