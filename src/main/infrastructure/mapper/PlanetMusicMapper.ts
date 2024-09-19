import {PlanetMusic} from "../../domain/entity/PlanetMusic.js";
import {Planet} from "../dto/Planet.js";
import {Synth} from "../../domain/entity/Synth.js";
import {MusicRange} from "../../domain/entity/MusicRange.js";

export class PlanetMusicMapper {

	private readonly MIN_BPM = 90;
	private readonly MAX_BPM = 240;
	private readonly notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']

	public mapToDomain(planet: Planet): PlanetMusic {
		const tempo = this.calculateTempo(planet.revolutionSpeedInDays);
		const synthToUse = this.calculateSynthToUse(planet.mass.exponent);
		const musicRange = this.calculateMusicRange(planet.mass.value, planet.type);

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

	private calculateMusicRange(mass: number, type: string): Array<string> {
		// return the music range based on the mass
		for (const key in MusicRange) {
			const range = MusicRange[key];

			if (mass >= range.interval[0] && mass < range.interval[1]) {
				return this.modifyMusicRangeBasedOnType(range, type);
			}
		}

		return this.modifyMusicRangeBasedOnType(MusicRange.B, type);
	}

	private modifyMusicRangeBasedOnType(musicRange: MusicRange, type: string): Array<string> {
		let modifiedRange;
		if (type === "Moon" || type === "Planet") {
			modifiedRange = this.makeMajorMusicRange(musicRange);
		} else {
			modifiedRange = this.makeMinorMusicRange(musicRange);
		}

		// return modifiedRange
		return this.refineAlteratedNotes(modifiedRange);
	}

	private makeMajorMusicRange(musicRange: MusicRange): Array<string> {
		const majorScalePattern = ["W", "W", "H", "W", "W", "W", "H"];
		return this.makeMusicRangeFollowPattern(musicRange, majorScalePattern);
	}

	private makeMinorMusicRange(musicRange: MusicRange): Array<string> {
		const minorScalePattern = ["W", "W", "H", "W", "W", "W", "H"];
		return this.makeMusicRangeFollowPattern(musicRange, minorScalePattern);
	}

	private makeMusicRangeFollowPattern(musicRange: MusicRange, minorScalePattern: string[]) {
		const result = new Array<string>()

		let index: number = this.notes.findIndex(note => note == musicRange.key);

		for (const step of minorScalePattern) {
			const increment = step === "W" ? 2 : 1;
			index = index + increment < this.notes.length ? index + increment : index + increment - this.notes.length;

			result.push(this.notes[index]);
		}

		return result;
	}

	private refineAlteratedNotes(modifiedRange: Array<string>) {
		return modifiedRange.map(note => {
			if (note.includes("/")
				&& note.substring(
					note.length - 2, note.length).includes(
					modifiedRange[modifiedRange.findIndex(subnote => subnote === note) + 1][0]
				)
			) {
				return note.substring(0, note.indexOf("/"));
			} else if (note.includes("/")) {
				return note.substring(note.length - 2, note.length);
			}

			return note;
		})
	}
}
