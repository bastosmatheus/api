import express from "express";
import { db } from "./db/connection.js";
import bodyParser from "body-parser";
import router from "./routes/router.js";

const app = express();

const jsonParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({ extended: true });

db.on("error", console.log.bind(console, "Connection error."));

db.once("open", () => {
  console.log("Connection successful.");
});

app.use(jsonParser);
app.use(urlParser);
app.use(router);

app.listen(3000, () => {
  console.log("Server is online.");
});
