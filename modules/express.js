const express = require("express");
const userModel = require("../src/database/Models/user.model");


const app = express();

app.use(express.json());

/* 
  executa depois de request e response
app.use((req,res,next)=>{
  console.log(req.body);
 console.log(`content type:${req.method}`);
 console.log(`content type:${req.headers["content-type"]}`);
 //console.log(`Data:${new date()}`);

  next();
})
*/

/* app.get("/user", (req, res) => {
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
  res.status(200).json(users);

  
app.get("/home", (req, res) => {
  res.contentType("applicaton/html");
  res.status(200).send("<h1>hello world</h1>");
});

});*/

app.get("/user/:id", async (req, res) => {
  try{
      const id = req.params.id;
      const user = await userModel.findById(id);
      return res.status(200).json(user);

  }catch(error){
    return res.status(500).send(error.message);
  }
});

app.get("/user", async (req, res) => {
  try{
    const users = await userModel.find({});
    res.status(200).json(users);
   res.status(200).json(users);
  }catch(error){
      return res.status(500).send(error.massage);
  }
});

app.post("/user", async (req, res) => {
  try{
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  }
  catch(error){
       res.status(500).send(error.message);
  }

});

app.patch("/user/:id", async function(req,res){
  try{
      const id=req.params.id;
      const user = await userModel.findByIdAndUpdate(id,req.body,{new:true})
      res.status(200).json(user); 
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

app.delete("/user/:id", async function(req,res){
  try{
      const id=req.params.id;
      const user = await userModel.findByIdAndRemove(id)
      res.status(200).json(user); 
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

const port = 8020;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
