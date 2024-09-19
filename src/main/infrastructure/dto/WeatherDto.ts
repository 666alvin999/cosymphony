export class WeatherDto {
	constructor(
		public readonly cityName: string,
		public readonly stateCode: string,
		public readonly countryCode: string,
		public readonly timezone: string,
		public readonly lat: number,
		public readonly lon: number,
		public readonly station: string,
		public readonly sources: string[],
		public readonly vis: number,
		public readonly rh: number,
		public readonly dewpt: number,
		public readonly windDir: number,
		public readonly windCdir: string,
		public readonly windCdirFull: string,
		public readonly windSpeed: number,
		public readonly gust: number,
		public readonly temp: number,
		public readonly appTemp: number,
		public readonly clouds: number,
		public readonly weather: WeatherInfo,
		public readonly datetime: string,
		public readonly obTime: string,
		public readonly ts: number,
		public readonly sunrise: string,
		public readonly sunset: string,
		public readonly slp: number,
		public readonly pres: number,
		public readonly aqi: number,
		public readonly uv: number,
		public readonly solarRad: number,
		public readonly ghi: number,
		public readonly dni: number,
		public readonly dhi: number,
		public readonly elevAngle: number,
		public readonly hourAngle: number,
		public readonly pod: string,
		public readonly precip: number,
		public readonly snow: number
	) {}
}

export class WeatherInfo {
	constructor(
		public icon: string,
		public code: number,
		public description: string,
	) {}
}