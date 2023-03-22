const { PORT }= require("./config/config");
const { db }= require("./config/database");
const express= require("express");

const server = express();

db.authenticate().then(() => {
 server.listen(PORT, () => {
   console.log( `server listening at ${PORT} port` );
  });
});