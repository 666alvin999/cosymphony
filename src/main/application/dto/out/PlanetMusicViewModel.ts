import {Synth} from "../../../domain/entity/Synth.js";

export class PlanetMusicViewModel {

	private tempo: number;
	private musicRange: Array<string>;
	private synthToUse: Synth;

	constructor(tempo: number, musicRange: Array<string>, synthToUse: Synth) {
		this.tempo = tempo;
		this.musicRange = musicRange;
		this.synthToUse = synthToUse;
	}

}