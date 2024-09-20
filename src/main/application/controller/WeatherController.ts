import {Request, Response} from "express";
import {GetWeather} from "../../domain/usecase/GetWeather.js";
import {WeatherViewModel} from "../dto/out/WeatherViewModel.js";
import {WeatherAdapter} from "../../infrastructure/adapter/WeatherAdapter.js";
import {WeatherDao} from "../../infrastructure/dao/WeatherDao.js";
import {WeatherMapper} from "../../infrastructure/mapper/WeatherMapper.js";
import {WeatherPresenter} from "../presenter/WeatherPresenter.js";
import {ActionResult} from "../../domain/entity/ActionResult.js";

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