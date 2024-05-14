const http = require('http');
const { createProxy } = require('proxy');

const server = createProxy(http.createServer());
server.listen(2560, () => {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});