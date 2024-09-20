import express, {response} from "express";
import {SpaceController} from "../controller/SpaceController.js"

const spaceRouter = express.Router();
const spaceController = new SpaceController();

spaceRouter.get('/get/:planet', (req, res) => {
	spaceController.getPlanetMusicJSON(req, res)
});

spaceRouter.get('/get/', (req, res) => {
	response.send("hello");
});

export {spaceRouter};