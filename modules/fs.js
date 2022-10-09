const fs = require("fs");
const path = require("path");

// criar pasta
/*
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Pasta criada com sucesso!");
});
*/

// criar e modificar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Aquivo criado com sucesso!");

    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "  Sebastiao",
      (error) => {
        if (error) {
          return console.log("Erro:", error);
        }
        console.log("Aquivo criado com mofificado.");
      }
    );

    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("erro:", error);
        }
        console.log(data);
      }
    );
  }
);
