import {WeatherPort} from "../port/WeatherPort.js";
import {WeatherPresentationPort} from "../port/WeatherPresentationPort.js";
import {Weather} from "../entity/Weather.js";
import {ActionResult} from "../entity/ActionResult.js";

export class GetWeather<T> {

	private weatherPort: WeatherPort;

	public constructor(weatherPort: WeatherPort) {
		this.weatherPort = weatherPort;
	}

	public async execute(lat: string, long: string, weatherPresentationPort: WeatherPresentationPort<T>): Promise<T | ActionResult> {
		const weather: Weather | ActionResult = await this.weatherPort.getWeather(parseInt(lat), parseInt(long));

		return weather instanceof Weather ? weatherPresentationPort.present(weather) : weather;
	}

}