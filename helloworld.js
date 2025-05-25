var http = require('http');

http.createServer(function (req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to Sinem\'s Amazing Web App!\n');
}).listen(3333, '0.0.0.0');

console.log('Server running at http://0.0.0.0:3333/');