import {PlanetMusic} from "../../domain/entity/PlanetMusic.js";
import {Planet} from "../dto/Planet.js";
import {Synth} from "../../domain/entity/Synth.js";
import {MusicRange} from "../../domain/entity/MusicRange.js";

export class PlanetMusicMapper {

	private readonly MIN_BPM = 90;
	private readonly MAX_BPM = 240;

	public mapToModel(planet: Planet): PlanetMusic {
		const tempo = this.calculateTempo(planet.revolutionSpeedInDays);
		const synthToUse = this.calculateSynthToUse(planet.mass.exponent);
		const musicRange = this.calculateMusicRange(planet.mass.value);

		return new PlanetMusic(tempo, musicRange, synthToUse);
	}

	private calculateTempo(revolutionSpeedInDays: number): number {
		const earthRevolutionSpeedInDays = 365;

		// Utilisation d'un facteur logarithmique pour maintenir une échelle musicale
		const tempoInBpm = this.MIN_BPM + (Math.log(revolutionSpeedInDays) / Math.log(earthRevolutionSpeedInDays)) * (this.MAX_BPM - this.MIN_BPM);

		// Limiter le BPM pour qu'il reste entre 90 et 240 BPM
		return Math.min(Math.max(Math.round(tempoInBpm), this.MIN_BPM), this.MAX_BPM);
	}

	private calculateSynthToUse(exponent: number): Synth {
		switch (exponent) {
			case 22:
				return Synth.SimpleSynth;
			case 23:
				return Synth.MonoSynth;
			case 24:
				return Synth.FMSynth;
			case 25:
				return Synth.AMSynth;
			case 26:
				return Synth.PolySynth;
			default:
				return Synth.MetalSynth;
		}
	}

	private calculateMusicRange(mass: number): Array<string> {
		// return the music range based on the mass

		return Object
			.keys(MusicRange)
			.filter(
				key => mass >= MusicRange[key].interval[0] || mass < MusicRange[key].interval[1]
			);
	}
}
