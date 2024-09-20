import {ActionResult} from "../../domain/entity/ActionResult.js";
import {WeatherDto, WeatherInfo} from "../dto/WeatherDto";

export class WeatherDao {

	public async getWeatherByLatLong(lat: number, long: number): Promise<WeatherDto | ActionResult> {
		try {
			return await this.getWeatherByLatLongUsingAPI(lat, long);
		} catch (e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	private async getWeatherByLatLongUsingAPI(lat: number, long: number): Promise<WeatherDto | ActionResult> {
		try {
			const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${process.env.WEATHERBIT_API_KEY}&include=minutely`;
			const response = await fetch(url);
			const json = await response.json();
			const weatherData = json.data[0];

			return new WeatherDto(
				weatherData.city_name,
				weatherData.state_code,
				weatherData.country_code,
				weatherData.timezone,
				weatherData.lat,
				weatherData.lon,
				weatherData.station,
				weatherData.sources,
				weatherData.vis,
				weatherData.rh,
				weatherData.dewpt,
				weatherData.wind_dir,
				weatherData.wind_cdir,
				weatherData.wind_cdir_full,
				weatherData.wind_speed,
				weatherData.gust,
				weatherData.temp,
				weatherData.app_temp,
				weatherData.clouds,
				new WeatherInfo(
					weatherData.weather.icon,
					weatherData.weather.code,
					weatherData.weather.description
				),
				weatherData.datetime,
				weatherData.ob_time,
				weatherData.ts,
				weatherData.sunrise,
				weatherData.sunset,
				weatherData.slp,
				weatherData.pres,
				weatherData.aqi,
				weatherData.uv,
				weatherData.solar_rad,
				weatherData.ghi,
				weatherData.dni,
				weatherData.dhi,
				weatherData.elev_angle,
				weatherData.hour_angle,
				weatherData.pod,
				weatherData.precip,
				weatherData.snow
			);
		} catch (e: any) {
			return ActionResult.ActionFailed(e.message);
		}

	}
}