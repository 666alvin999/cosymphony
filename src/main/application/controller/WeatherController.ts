import {Request, Response} from "express";
import {GetWeather} from "../../domain/usecase/GetWeather";
import {WeatherViewModel} from "../dto/out/WeatherViewModel";
import {WeatherAdapter} from "../../infrastructure/adapter/WeatherAdapter";
import {WeatherDao} from "../../infrastructure/dao/WeatherDao";
import {WeatherMapper} from "../../infrastructure/mapper/WeatherMapper";
import {WeatherPresenter} from "../presenter/WeatherPresenter";

export class WeatherController {

  private getWeather: GetWeather<WeatherViewModel>;
  private readonly weatherPresenter: WeatherPresenter;

  constructor() {
    const weatherPort = new WeatherAdapter(new WeatherDao(), new WeatherMapper());

    this.weatherPresenter = new WeatherPresenter();
    this.getWeather = new GetWeather<WeatherViewModel>(weatherPort);
  }

  public async getWeatherJSON(request: Request, response: Response): Promise<void> {
    const weatherViewModel: WeatherViewModel = await this.getWeather.execute(request.params.lat, request.params.long, this.weatherPresenter);
    response.status(200).json(weatherViewModel);
  }

}