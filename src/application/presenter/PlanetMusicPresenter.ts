import {PlanetMusicPresentationPort} from "../../domain/port/PlanetMusicPresentationPort.js";
import {PlanetMusicViewModel} from "../dto/out/PlanetMusicViewModel.js";
import {PlanetMusic} from "../../domain/entity/PlanetMusic.js";

export class PlanetMusicPresenter implements PlanetMusicPresentationPort<PlanetMusicViewModel> {

	public present(planetMusic: PlanetMusic): PlanetMusicViewModel {
		return new PlanetMusicViewModel(
			planetMusic.getTempo(),
			planetMusic.getMusicRange(),
			planetMusic.getSynthToUse()
		);
	}

}