// app.js

const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {  
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('The start of chat bot Frazzle.');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Frazzle Server Running ;)');  