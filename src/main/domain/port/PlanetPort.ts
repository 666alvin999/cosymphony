import {PlanetMusic} from "../entity/PlanetMusic.js";
import {ActionResult} from "../entity/ActionResult";

export interface PlanetPort {

	getPlanetMusic: (planetName: string) => Promise<PlanetMusic | ActionResult>;

}