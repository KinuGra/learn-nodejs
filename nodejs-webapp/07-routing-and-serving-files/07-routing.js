"use strict";

// 最小ルーター
const http = require("http");
const fs = require("fs");

const port = 3000;

// ルート定義
const routes = {
  "GET /": (req, res) => {
    fs.readFile("./view/index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Server Error");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  },

  "GET /api": (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello API" }));
  },

  "GET /api/test": (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        id: 10000,
        message: "hello, world",
        method: `${req.method}`,
      }),
    );
  },
};

// ルーター
function router(req, res) {
  const key = `${req.method} ${req.url}`;
  const handler = routes[key];

  if (handler) {
    return handler(req, res);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
}

// サーバー
const server = http.createServer((req, res) => {
  console.log(`${req.method}: ${req.url}`);
  router(req, res);
});

server.listen(port);
console.log(`Server running on port ${port}`);
