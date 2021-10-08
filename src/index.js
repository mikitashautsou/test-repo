// console.log("ok");

// /*

// 0 -> goal not reached
// 1 -> goal not reached

// (0, 0, GNR)
// (0, 0, GNR)

// */

const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`
  
  <html>
  <h1>asdfasd</h1>
  </html>
  `);
};

const server = http.createServer(requestListener);
server.listen(3000);
