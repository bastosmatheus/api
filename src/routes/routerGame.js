import express from "express";
import gameService from "../controllers/gameController.js";

const routerGame = express.Router();

routerGame.get("/games", (req, res) => gameService.getAllGames(req, res));

routerGame.post("/game", (req, res) => gameService.createGame(req, res));

routerGame.delete("/game/:id", (req, res) => gameService.deleteGame(req, res));

routerGame.put("/game/:id", (req, res) => gameService.updateGame(req, res));

export default routerGame;
