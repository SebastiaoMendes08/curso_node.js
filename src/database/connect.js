const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:temp.123@sebastiao.czlzcnq.mongodb.net/?retryWrites=true&w=majority",
    (error) => {
      if (error) {
        return console.log("O erro ao conectar com banco de dados", error);
      }
      return console.log("conexão ao banco de dados efectuada com sucesso.");
    }
  );
};

module.exports = connectToDatabase;
