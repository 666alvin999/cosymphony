import {Request, Response} from "express";
import {PlanetDao} from "../../infrastructure/dao/PlanetDao.js";
import {PlanetMusicPresenter} from "../presenter/PlanetMusicPresenter.js";
import {GetPlanetMusic} from "../../domain/usecase/GetPlanetMusic.js";
import {PlanetMusicViewModel} from "../dto/out/PlanetMusicViewModel.js";
import {PlanetAdapter} from "../../infrastructure/adapter/PlanetAdapter.js";
import {Planet} from "../../infrastructure/dto/Planet.js";
import {PlanetMusicMapper} from "../../infrastructure/mapper/PlanetMusicMapper.js";
import {GetWeather} from "../../domain/usecase/GetWeather";
import {WeatherViewModel} from "../dto/out/WeatherViewModel";
import {WeatherAdapter} from "../../infrastructure/adapter/WeatherAdapter";
import {WeatherDao} from "../../infrastructure/dao/WeatherDao";
import {WeatherMapper} from "../../infrastructure/mapper/WeatherMapper";
import {WeatherPresenter} from "../presenter/WeatherPresenter";

export class SpaceController {

  private getPlanetMusic: GetPlanetMusic<PlanetMusicViewModel>;
  private getWeather: GetWeather<WeatherViewModel>;
  private readonly planetMusicPresenter: PlanetMusicPresenter;
  private readonly weatherPresenter: WeatherPresenter;

  constructor() {
    const planetPort = new PlanetAdapter(new PlanetDao(), new PlanetMusicMapper());
    const weatherPort = new WeatherAdapter(new WeatherDao(), new WeatherMapper());

    this.planetMusicPresenter = new PlanetMusicPresenter();
    this.weatherPresenter = new WeatherPresenter();
    this.getPlanetMusic = new GetPlanetMusic<PlanetMusicViewModel>(planetPort);
    this.getWeather = new GetWeather<WeatherViewModel>(weatherPort);
  }

  public async getPlanetMusicJSON(request: Request, response: Response): Promise<void> {

    const planetMusicViewModel: PlanetMusicViewModel = await this.getPlanetMusic.execute(request.params.planet, this.planetMusicPresenter);
    response.status(200).json(planetMusicViewModel);
  }

  public async getWeatherJSON(request: Request, response: Response): Promise<void> {
    const weatherViewModel: WeatherViewModel = await this.getWeather.execute(request.params.lat, request.params.long, this.weatherPresenter);
    response.status(200).json(weatherViewModel);
  }

  public savePlanet(request: Request, response: Response): void {
    try {
      const planet = new Planet({name: "mars", type: "test", mass: {value: 3, exponent: 3}, revolutionSpeedInDays: 3});
      new PlanetDao().savePlanet(planet);
    } catch (e: any) {
      console.log(e.message);
    }

    response.send("o");
  }

}