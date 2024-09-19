import {WeatherInfo} from "../../../infrastructure/dto/WeatherDto";

export class WeatherViewModel {

  private temp: number;
  private weather: WeatherInfo;
  private rh: number;
  private clouds: number;

  public constructor(tempo: number, weather: WeatherInfo, rh: number, clouds: number) {
    this.temp = tempo;
    this.weather = WeatherInfo;
    this.rh = rh;
    this.clouds = clouds;
  }

}