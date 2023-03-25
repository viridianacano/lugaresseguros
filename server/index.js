
const express= require("express");
const res= require("express/lib/response");

const server = express();

server.get(('/saludar'),(req,res) => {
 return res.status(200).send("saludo")
});

module.exports={ server };