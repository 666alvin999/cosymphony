import {Weather} from "../entity/Weather";
import {ActionResult} from "../entity/ActionResult";

export interface WeatherPort {

	getWeather: (lat: number, long: number) => Promise<Weather | ActionResult>;

}