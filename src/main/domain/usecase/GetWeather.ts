import {WeatherPort} from "../port/WeatherPort";
import {WeatherPresentationPort} from "../port/WeatherPresentationPort";
import {Weather} from "../entity/Weather";
import {ActionResult} from "../entity/ActionResult";

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