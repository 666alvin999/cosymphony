import {Weather} from "../entity/Weather";

export interface WeatherPresentationPort<T> {

	present: (weather: Weather) => T;

}