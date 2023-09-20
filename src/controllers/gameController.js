import { modelNames } from "mongoose";
import Game from "../models/Game.js";

const createGame = async (req, res) => {
  try {
    const { nameOfGame, dateOfLaunch, activePlayers } = req.body;

    const arrayGame = await Game.find();

    const game = {
      nameOfGame: nameOfGame,
      dateOfLaunch: dateOfLaunch,
      activePlayers: activePlayers,
    };

    game._id = arrayGame.length + 1;

    if (game === "null") {
      return res
        .status(404)
        .json({ message: "Game not was created.", error: 404 });
    }

    const service = await Game.create(game);

    return res
      .status(201)
      .json({ message: "game object created with successful.", game: service });
  } catch (error) {
    console.log(error);
  }
};

const getAllGames = async (req, res) => {
  try {
    const service = await Game.find();

    return res.status(200).json(service);
  } catch (error) {
    console.log(error);
  }
};

const deleteGame = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await Game.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ message: "Game id is not found." });
    }

    return res
      .status(200)
      .json({ message: "game was deleted.", game: service });
  } catch (error) {
    console.log(error);
  }
};

const updateGame = async (req, res) => {
  try {
    const id = req.params.id;
    const { nameOfGame, dateOfLaunch, activePlayers } = req.body;

    const newGame = {
      nameOfGame: nameOfGame,
      dateOfLaunch: dateOfLaunch,
      activePlayers: activePlayers,
    };

    const service = await Game.findByIdAndUpdate(id, newGame);

    if (!service) {
      return res.status(404).json({ message: "game not found." });
    }

    return res.status(200).json({ message: "game updated.", game: service });
  } catch (error) {
    console.log(error);
  }
};

const gameService = {
  getAllGames,
  createGame,
  deleteGame,
  updateGame,
};

export default gameService;
