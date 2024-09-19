import {PlanetPort} from "../../main/domain/port/PlanetPort";
import {PlanetMusic} from "../../main/domain/entity/PlanetMusic";
import {Promise} from "mongoose";
import {Synth} from "../../main/domain/entity/Synth";

export class PlanetAdapterMock implements PlanetPort {

	public async getPlanetMusic(planetName: string): Promise<PlanetMusic> {
		return new PlanetMusic(
			200,
			["", ""],
			Synth.SimpleSynth
		);
	}

}