import {WeatherInfo} from "../../../infrastructure/dto/WeatherDto";

export class WeatherViewModel {

  private temp: number;
  private weather: WeatherInfo;
  private rh: number;
  private clouds: number;

  public constructor(tempo: number, weather: WeatherInfo, rh: number, clouds: number) {
    this.temp = tempo;
    this.weather = weather;
    this.rh = rh;
    this.clouds = clouds;
  }

  public getWeather() {
    return this.weather;
  }

}