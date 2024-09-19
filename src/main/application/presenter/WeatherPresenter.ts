import {WeatherPresentationPort} from "../../domain/port/WeatherPresentationPort";
import {WeatherViewModel} from "../dto/out/WeatherViewModel";
import {Weather} from "../../domain/entity/Weather";

export class WeatherPresenter implements WeatherPresentationPort<WeatherViewModel> {

	public present(weather: Weather): WeatherViewModel {
		return new WeatherViewModel(
			weather.getTemp(),
			weather.getWeather(),
			weather.getRh(),
			weather.getClouds()
		);
	}

}