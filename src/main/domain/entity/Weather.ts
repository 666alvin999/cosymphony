import {WeatherInfo} from "../../infrastructure/dto/WeatherDto";

export class Weather {

	private readonly weather: WeatherInfo;

	public constructor(weather: WeatherInfo) {
		this.weather = weather;
	}

	public getWeather(): string {
		const code = this.weather.code;

		if (code >= 200 && code < 300) {
			return "BitCrusher";
		}
		else if (code >= 300 && code < 400) {
			return "Freeverb";
		}
		else if (code >= 500 && code < 600) {
			return "Vibrato";
		}
		else if (code >= 600 && code < 700) {
			return "Chebyshev";
		}
		else if (code >= 700 && code < 800) {
			return "JCReverb";
		}
		else if (code >= 800) {
			return "Distortion";
		}

		return "No effect";
	}

}