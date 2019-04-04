const http = require('http'); //import HTTP module
const port = 3000;
const fs = require('fs');

const requestHandler = (request, response) => {
  fs.writeFile('hello-word.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;
    response.end(`Handling a request on port ${port}`)
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }

  console.log(`server is listening on ${port}`);
});
