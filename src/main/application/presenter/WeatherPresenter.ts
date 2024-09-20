import {WeatherPresentationPort} from "../../domain/port/WeatherPresentationPort.js";
import {WeatherViewModel} from "../dto/out/WeatherViewModel.js";
import {Weather} from "../../domain/entity/Weather.js";

export class WeatherPresenter implements WeatherPresentationPort<WeatherViewModel> {

	public present(weather: Weather): WeatherViewModel {
		return new WeatherViewModel(
			weather.getWeather(),
		);
	}

}