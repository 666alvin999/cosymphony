import {PlanetPort} from "../port/PlanetPort.js";
import {PlanetMusicPresentationPort} from "../port/PlanetMusicPresentationPort.js";

export class GetPlanetMusic<T> {

	private planetPort: PlanetPort;

	public constructor(planetPort: PlanetPort) {
		this.planetPort = planetPort;
	}

	public async execute(planetName: string, planetMusicPresentationPort: PlanetMusicPresentationPort<T>): Promise<T> {
		const planetMusic = await this.planetPort.getPlanetMusic(planetName);

		return planetMusicPresentationPort.present(planetMusic);
	}

}