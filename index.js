const { createServer } = require('node:http');
const url = require('node:url');
const fs = require('node:fs');

//const hostname = '127.0.0.1'; // aka: localhost
const hostname = "localhost";
const port = 3000;

const server = createServer((req, res) => {

  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;

  if (filename === "./") {
    fs.readFile('index.html', function(err, data) {
      if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("Something wrong with the internet");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if (filename === "./about") {
    fs.readFile('about.html', function(err, data) {
      if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("Something wrong with the internet");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if (filename === "./contact-me") {
    fs.readFile('contact-me.html', function(err, data) {
      if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("Something wrong with the internet");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile('404.html', function(err, data) {
      if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("Something wrong with the internet");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
