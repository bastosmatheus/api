import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    nameOfGame: { type: String, required: true },
    dateOfLaunch: { type: String, required: true },
    activePlayers: { type: String, required: true },
  },
  { timestamps: true }
);

const Game = mongoose.model("game", gameSchema);

export default Game;
