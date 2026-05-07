const http = require('http');

const app = http.createServer((req, res) => {
  // Set response header to plain text for any endpoint
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the same response body regardless of the URL path
  res.end('Hello Holberton School!');
});

// Start listening on port 1245
app.listen(1245);

module.exports = app;
