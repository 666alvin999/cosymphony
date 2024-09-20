import express from "express";
import {WeatherController} from "../controller/WeatherController.js";

const weatherRouter = express.Router();
const weatherController = new WeatherController();
weatherRouter.get('/get/:lat/:long', (req, res) => {
	weatherController.getWeatherJSON(req, res)
});

export {weatherRouter};