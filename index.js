const { PORT }= require("./config/config");

const express= require("express");

const server = express();

server.listen(PORT, () => {
 console.log( `server listening at ${PORT} port` );
});