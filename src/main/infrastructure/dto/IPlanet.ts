export type IPlanet = {
	id: string,
	name: string,
	type: string,
	mass: { value: number, exponent: number },
	revolutionSpeedInDays: number,
	save: Function
}