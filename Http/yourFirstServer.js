const http = require('http');

let server = http.createServer((req, res) => {
  // debugger;
  res.end('Hello World from the Papa!');
});
server.listen(9000, () => console.log('listening on http://localhost:9000'));
