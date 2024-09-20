import {Weather} from "../entity/Weather.js";
import {ActionResult} from "../entity/ActionResult.js";

export interface WeatherPort {

	getWeather: (lat: number, long: number) => Promise<Weather | ActionResult>;

}