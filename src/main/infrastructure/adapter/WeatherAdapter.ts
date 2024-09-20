import {Weather} from "../../domain/entity/Weather.js";
import {WeatherDao} from "../dao/WeatherDao.js";
import {WeatherMapper} from "../mapper/WeatherMapper.js";
import {WeatherPort} from "../../domain/port/WeatherPort.js";
import {WeatherDto} from "../dto/WeatherDto.js";
import {ActionResult} from "../../domain/entity/ActionResult.js";

export class WeatherAdapter implements WeatherPort {

	private weatherDao: WeatherDao;
	private weatherMapper: WeatherMapper;

	public constructor(weatherDao: WeatherDao, weatherMapper: WeatherMapper) {
		this.weatherDao = weatherDao;
		this.weatherMapper = weatherMapper;
	}

	public async getWeather(lat: number, long: number): Promise<Weather | ActionResult> {
		const weatherDto = await this.weatherDao.getWeatherByLatLong(lat, long);

		if (weatherDto instanceof WeatherDto) {
			return this.weatherMapper.mapToModel(weatherDto)
		}

		return weatherDto;
	}

}