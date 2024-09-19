import express from "express";
import {SpaceController} from "../controller/SpaceController.js"

const spaceRouter = express.Router();
const spaceController = new SpaceController();

spaceRouter.get('/get/:planet', (req, res) => {
	spaceController.getPlanetMusicJSON(req, res)
});

export {spaceRouter};