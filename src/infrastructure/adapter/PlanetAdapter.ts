import {PlanetDao} from "../dao/PlanetDao.js";
import {PlanetPort} from "../../domain/port/PlanetPort.js";
import {PlanetMusic} from "../../domain/entity/PlanetMusic.js";
import {Synth} from "../../domain/entity/Synth.js";

export class PlanetAdapter implements PlanetPort {

	private planetDao: PlanetDao;

	public constructor(planetDao: PlanetDao) {
		this.planetDao = planetDao;
	}

	public async getPlanetMusic(planetName: string): Promise<PlanetMusic> {
		const planet = await this.planetDao.getPlanetByName(planetName);
		return new PlanetMusic(2, ["",""], Synth.SimpleSynth);
	}

}