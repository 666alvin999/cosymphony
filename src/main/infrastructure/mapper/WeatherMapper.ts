import {Weather} from "../../domain/entity/Weather.js";
import {WeatherDto} from "../dto/WeatherDto.js";

export class WeatherMapper {

	public mapToModel(weatherDto: WeatherDto): Weather {
		return new Weather(weatherDto.weather);
	}

}
