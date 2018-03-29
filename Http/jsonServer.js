const http = require('http'),
	  url = require('url');

class JsonServer {
	start(port) {
		let server = http.createServer((req, res) => {
			let pathname = url.parse(req.url).pathname;
			this.processRequest(res, pathname);
		});
		server.listen(port, () => {
			console.log('Listening on ' + port + '...');
		});
	}

	processRequest(res, pathname) {
		let json = '';
		switch (pathname) {
			case '/':
				json = '{ "useRoute":"Call with /customers or /orders" }';
				break;
			case '/customers':
				json = '[{"firstName":"John", "lastName":"Doe"},{"firstName":"Jane", "lastName":"Doe"}]';
				break;
			case '/orders':
				json = '[{"orderID":"1","quantity":"20"},{"orderID":"2","quantity":"10"}]';
				break;

		}
		res.writeHead(200, { "Content-Type": "application/json" });
		res.write(json);
		res.end();
	}
}

new JsonServer().start(9000);