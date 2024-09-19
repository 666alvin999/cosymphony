import {PlanetMusicPresentationPort} from "../../domain/port/PlanetMusicPresentationPort.js";
import {PlanetMusicViewModel} from "../dto/out/PlanetMusicViewModel.js";
import {PlanetMusic} from "../../domain/entity/PlanetMusic.js";
import {WeatherPresentationPort} from "../../domain/port/WeatherPresentationPort";
import {WeatherViewModel} from "../dto/out/WeatherViewModel";
import {Weather} from "../../domain/entity/Weather";

export class WeatherPresenter implements WeatherPresentationPort<WeatherViewModel> {

	public present(weather: Weather): WeatherViewModel {
		console.log(weather);
		return new WeatherViewModel(
			weather.getTemp(),
			weather.getWeather(),
			weather.getRh(),
			weather.getClouds()
		);
	}

}