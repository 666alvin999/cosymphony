import {Weather} from "../../domain/entity/Weather";
import {WeatherDto} from "../dto/WeatherDto";

export class WeatherMapper {

  public mapToModel(weatherDto: WeatherDto): Weather {
    return new Weather(weatherDto.weather);
  }

}
