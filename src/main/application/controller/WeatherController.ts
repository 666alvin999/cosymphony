import {Request, Response} from "express";
import {GetWeather} from "../../domain/usecase/GetWeather";
import {WeatherViewModel} from "../dto/out/WeatherViewModel";
import {WeatherAdapter} from "../../infrastructure/adapter/WeatherAdapter";
import {WeatherDao} from "../../infrastructure/dao/WeatherDao";
import {WeatherMapper} from "../../infrastructure/mapper/WeatherMapper";
import {WeatherPresenter} from "../presenter/WeatherPresenter";
import {ActionResult} from "../../domain/entity/ActionResult";

export class WeatherController {

	private getWeather: GetWeather<WeatherViewModel>;
	private readonly weatherPresenter: WeatherPresenter;

	constructor() {
		const weatherPort = new WeatherAdapter(new WeatherDao(), new WeatherMapper());

		this.weatherPresenter = new WeatherPresenter();
		this.getWeather = new GetWeather<WeatherViewModel>(weatherPort);
	}

	public async getWeatherJSON(request: Request, response: Response): Promise<void> {
		const weatherViewModel: ActionResult | WeatherViewModel = await this.getWeather.execute(request.params.lat, request.params.long, this.weatherPresenter);
		if (weatherViewModel instanceof WeatherViewModel) {
			response.status(200).json(weatherViewModel);
		} else {
			response.status(500).json(weatherViewModel);
		}
	}

}