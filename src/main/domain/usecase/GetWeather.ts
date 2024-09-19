import {WeatherPort} from "../port/WeatherPort";
import {WeatherPresentationPort} from "../port/WeatherPresentationPort";
import {Weather} from "../entity/Weather";

export class GetWeather<T> {

  private weatherPort: WeatherPort;

  public constructor(weatherPort: WeatherPort) {
    this.weatherPort = weatherPort;
  }

  public async execute(lat: string, long: string, weatherPresentationPort: WeatherPresentationPort<T>): Promise<T> {
    const weather: Weather = await this.weatherPort.getWeather(parseInt(lat), parseInt(long));

    return weatherPresentationPort.present(weather);
  }

}