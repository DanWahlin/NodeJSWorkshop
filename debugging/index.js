const http = require('http');

let server = http.createServer((req, res) => {
  debugger;
  res.end('Hello World from the Server!');
});
server.listen(8080, () => console.log('listening on http://localhost:8080'));
