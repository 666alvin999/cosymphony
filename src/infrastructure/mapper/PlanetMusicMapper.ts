import {PlanetMusic} from "../../domain/entity/PlanetMusic.js";
import {Planet} from "../dto/Planet.js";
import {Synth} from "../../domain/entity/Synth.js";
import {MusicRange} from "../../domain/entity/MusicRange.js";

export class PlanetMusicMapper {

  public mapToModel(planet: Planet): PlanetMusic {
    const tempo = this.calculateTempo(planet.revolutionSpeedInDays);
    const synthToUse = this.calculateSynthToUse(planet.mass.exponent);
    const musicRange = this.calculateMusicRange(planet.mass.value);
    return new PlanetMusic(tempo, musicRange, synthToUse);
  }

  private calculateTempo(revolutionSpeedInDays: number): number {
    const minBPM = 90;
    const maxBPM = 240;

    const earthRevolutionSpeedInDays = 365;

    // Utilisation d'un facteur logarithmique pour maintenir une échelle musicale
    const tempoInBpm = minBPM + (Math.log(revolutionSpeedInDays) / Math.log(earthRevolutionSpeedInDays)) * (maxBPM - minBPM);

    // Limiter le BPM pour qu'il reste entre 90 et 240 BPM
    return Math.min(Math.max(Math.round(tempoInBpm), minBPM), maxBPM);
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
    for (const key in MusicRange) {
      const range = MusicRange[key];
      if (mass >= range.interval[0] && mass < range.interval[1]) {
        return range.musicRange;
      }
    }
    throw new Error(`No music range found for mass: ${mass}`);
  }
}
