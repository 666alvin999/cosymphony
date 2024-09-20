import {PlanetMusic} from "../entity/PlanetMusic.js";
import {ActionResult} from "../entity/ActionResult.js";

export interface PlanetPort {

	getPlanetMusic: (planetName: string) => Promise<PlanetMusic | ActionResult>;

}