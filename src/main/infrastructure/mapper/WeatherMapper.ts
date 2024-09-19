import {PlanetMusic} from "../../domain/entity/PlanetMusic.js";
import {Planet} from "../dto/Planet.js";
import {Synth} from "../../domain/entity/Synth.js";
import {MusicRange} from "../../domain/entity/MusicRange.js";
import {Weather} from "../../domain/entity/Weather";
import {WeatherDto} from "../dto/WeatherDto";
import {ActionResult} from "../../domain/entity/ActionResult";

export class WeatherMapper {

	public mapToModel(weatherDto: WeatherDto): Weather {
		return new Weather(weatherDto.temp, weatherDto.weather, weatherDto.rh, weatherDto.clouds);
	}

}
