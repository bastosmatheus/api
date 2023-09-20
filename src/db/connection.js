import mongoose from "mongoose";
import dotenv from "dotenv";

const config = dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${user}:${password}@api-games.4lfed1t.mongodb.net/`
);

export const db = mongoose.connection;
