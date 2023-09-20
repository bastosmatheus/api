import express from "express";
import { db } from "./db/connection.js";

const app = express();

db.on("error", console.log.bind(console, "Connection error."));

db.once("open", () => {
  console.log("Connection successful.");
});

app.listen(3000, () => {
  console.log("Server is online.");
});
