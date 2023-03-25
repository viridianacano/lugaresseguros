const { PORT }= require("./config/config");
const { db }= require("./config/database");
const {server}= require("./server/index");



db.authenticate().then(() => {
    server.listen(PORT, () => {
      console.log( `server listening at ${PORT} port` );
     });
});