import {PlanetPort} from "../port/PlanetPort.js";
import {PlanetMusicPresentationPort} from "../port/PlanetMusicPresentationPort.js";
import {ActionResult} from "../entity/ActionResult";
import {PlanetMusic} from "../entity/PlanetMusic";

export class GetPlanetMusic<T> {

	private planetPort: PlanetPort;

	public constructor(planetPort: PlanetPort) {
		this.planetPort = planetPort;
	}

	public async execute(planetName: string, planetMusicPresentationPort: PlanetMusicPresentationPort<T>): Promise<T | ActionResult> {
		const planetMusic = await this.planetPort.getPlanetMusic(planetName);

		if (planetMusic instanceof PlanetMusic) {
			return planetMusicPresentationPort.present(planetMusic);
		}

		return planetMusic;
	}

}