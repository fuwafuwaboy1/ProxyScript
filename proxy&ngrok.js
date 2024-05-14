const http = require('http');
const { createProxy } = require('proxy');
const ngrok = require("@ngrok/ngrok");

(async function () {
	const listener = await ngrok.forward({
		addr: 2560,
    authtoken: 'token',
		proto: "tcp",
	});

	console.log(`Ingress established at: ${listener.url()}`);
})();

const server = createProxy(http.createServer());
server.listen(2560, () => {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});