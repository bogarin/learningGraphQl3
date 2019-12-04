import express from "express";
import {serviceMongo} from "./services";
serviceMongo.connection();

const app = express();
// app.use(
//   "/graphql",
//   })
// );
app.get("/", (req, res) => {
  res.send("todo listo");
});
app.listen(3000, () => console.log("funcionando servidor nodemon"));
