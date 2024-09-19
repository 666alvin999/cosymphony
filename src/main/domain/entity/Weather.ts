import {WeatherInfo} from "../../infrastructure/dto/WeatherDto";

export class Weather {

	private readonly temp: number;
	private readonly weather: WeatherInfo;
	private readonly rh: number;
	private readonly clouds: number;

	public constructor(temp: number, weather: WeatherInfo, rh: number, clouds: number) {
		this.temp = temp;
		this.weather = weather;
		this.rh = rh;
		this.clouds = clouds;
	}

	public getTemp(): number {
		return this.temp;
	}

	public getWeather(): WeatherInfo {
		return this.weather;
	}

	public getRh(): number {
		return this.rh;
	}

	public getClouds(): number {
		return this.clouds;
	}

}