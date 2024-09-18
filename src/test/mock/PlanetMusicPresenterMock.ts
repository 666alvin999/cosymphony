import {PlanetMusicPresentationPort} from "../../main/domain/port/PlanetMusicPresentationPort";
import {PlanetMusicViewModel} from "../../main/application/dto/out/PlanetMusicViewModel";
import {PlanetMusic} from "../../main/domain/entity/PlanetMusic";
import {Synth} from "../../main/domain/entity/Synth";

export class PlanetMusicPresenterMock implements PlanetMusicPresentationPort<PlanetMusicViewModel> {

	present(planetMusic: PlanetMusic): PlanetMusicViewModel {
		return new PlanetMusicViewModel(100, ["", ""], Synth.MonoSynth);
	}

}