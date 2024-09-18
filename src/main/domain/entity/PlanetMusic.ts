import {Synth} from "./Synth.js";

export class PlanetMusic {

	private tempo: number;
	private musicRange: Array<string>;
	private synthToUse: Synth;

	public constructor(tempo: number, musicRange: Array<string>, synthToUse: Synth) {
		this.tempo = tempo;
		this.musicRange = musicRange;
		this.synthToUse = synthToUse;
	}

	public getTempo(): number {
		return this.tempo;
	}

	public getMusicRange(): Array<string> {
		return this.musicRange;
	}

	public getSynthToUse(): Synth {
		return this.synthToUse;
	}

}