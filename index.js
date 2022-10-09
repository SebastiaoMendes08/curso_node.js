//console.log(person.SayMyName());
//require("./modules/path");
// require("./modules/fs");
//const { Person } = require("./Person");
//const person = new Person("Lucas");

//require("./modules/http");

// require("./modules/express");

const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
dotenv.config();

connectToDatabase();

require("./modules/express");

