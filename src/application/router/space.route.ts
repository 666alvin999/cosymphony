import express from "express";
import {SpaceController} from "../controller/SpaceController.js"

const spaceRouter = express.Router();
const spaceController = new SpaceController();

spaceRouter.get('/save', (req, res) => {
	spaceController.savePlanet(req, res);
});

spaceRouter.get('/get/:planet', (req, res) => {
	spaceController.getPlanetMusicJSON(req, res)
});

export {spaceRouter};