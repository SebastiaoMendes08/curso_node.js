const path = require("path");

// Apenas o nome do arquivo actual
console.log(path.basename(__filename));

// Nome do directorio actual
console.log(path.dirname(__filename));

// extensão do arquivo
console.log(path.extname(__filename));

//criar aquivo path
console.log(path.parse(__filename));

// juntar caminho de arquivo()
console.log(path.join(__dirname, "test", "test.html"));
console.log(__dirname);
