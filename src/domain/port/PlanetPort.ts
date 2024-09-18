import {PlanetMusic} from "../entity/PlanetMusic.js";

export interface PlanetPort {

	getPlanetMusic: (planetName: string) => Promise<PlanetMusic>;

}