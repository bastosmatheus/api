import express from "express";
import routerGame from "./routerGame.js";

const router = express.Router();

router.use("/", routerGame);

export default router;
