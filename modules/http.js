const http = require("http");
const port = 8020;
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<h1>home page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "sebastiao Mendes",
        email: "sebastiaomendes@gmail.com",
      },
      {
        name: "lucas antonio",
        email: "lucasantonio@gmail.com",
      },
    ];
    res.writeHead(200, { "content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`rodando na porta ${port}`));
