import {PlanetDao} from "../dao/PlanetDao.js";
import {PlanetPort} from "../../domain/port/PlanetPort.js";
import {PlanetMusic} from "../../domain/entity/PlanetMusic.js";
import {PlanetMusicMapper} from "../mapper/PlanetMusicMapper.js";

export class PlanetAdapter implements PlanetPort {

	private planetDao: PlanetDao;
	private planetMusicMapper: PlanetMusicMapper;

	public constructor(planetDao: PlanetDao, planetMusicMapper: PlanetMusicMapper) {
		this.planetDao = planetDao;
		this.planetMusicMapper = planetMusicMapper;
	}

	public async getPlanetMusic(planetName: string): Promise<PlanetMusic> {
		const planet = await this.planetDao.getPlanetByName(planetName);
		return this.planetMusicMapper.mapToModel(planet)
	}

}