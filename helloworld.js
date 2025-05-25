var http = require('http');

http.createServer(function (req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to Sinem\'s Amazing Web App!\n');
}).listen(3333); // bind to all interfaces (0.0.0.0)


console.log('Server running at http://34.238.118.133:3333/');