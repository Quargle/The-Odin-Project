const http = require('http');
const url = require('url');
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
    const requestedURL = url.parse(req.url).pathname;
    console.log(requestedURL);

    if (requestedURL == "/" || requestedURL == "/index") { 
        const file = fs.readFileSync("./index.html", "utf8");
        res.end(file);
    } else if (requestedURL == "/about"){
        const file = fs.readFileSync("./about.html", "utf8");
        res.end(file);
    } else if (requestedURL == "/contact-me"){
        const file = fs.readFileSync("./contact-me.html", "utf8");
        res.end(file);
    } else {
        const file = fs.readFileSync("./404.html", "utf8");
        res.end(file);
    }
  });

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
