import {Weather} from "../entity/Weather";

export interface WeatherPort {

	getWeather: (lat: number, long: number) => Promise<Weather>;

}