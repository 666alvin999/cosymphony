import {PlanetMusic} from "../entity/PlanetMusic.js";

export interface PlanetMusicPresentationPort<T> {

	present: (planetMusic: PlanetMusic) => T;

}