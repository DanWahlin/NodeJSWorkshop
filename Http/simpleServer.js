const http = require('http');

const server = (function() {
  let start = port => {
    let server = http.createServer((req, res) => {
      res.end('Hello World from the Server!');
    });
    server.listen(port, () => {
      console.log('Listening on ' + port + '...');
    });
  };

  return {
    start: start
  };
})();

server.start(9000);
