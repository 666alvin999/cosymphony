import {Planet} from "../dto/Planet.js";
import {ActionResult} from "../../domain/entity/ActionResult.js";

export class PlanetDao {

	public savePlanet(planet: Planet): ActionResult {
		try {
			planet.save();
			return ActionResult.ActionDone();
		} catch (e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	public async getPlanetByName(planetName: string): Promise<Planet | ActionResult> {
		try {
			return await this.getPlanetByNameUsingDBOrAPI(planetName);
		} catch(e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	private async getPlanetByNameUsingDBOrAPI(planetName: string): Promise<Planet | ActionResult> {
		try {
			const planet = await this.getPlanetByNameUsingDB(planetName);

			if (!planet) {
				return await this.getPlanetByNameUsingAPIAndSaveIntoDB(planetName);
			}

			return planet;
		} catch(e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	private async getPlanetByNameUsingDB(planetName: string): Promise<Planet | ActionResult>  {
		try {
			return await Planet.findOne({id: planetName}).exec();
		} catch(e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	private async getPlanetByNameUsingAPIAndSaveIntoDB(planetName: string): Promise<Planet | ActionResult> {
		try {
			const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
			const planetData = await response.json();
			const planet: Planet = new Planet({
				id: planetData.id,
				name: planetData.name,
				type: planetData.bodyType,
				mass: {
					value: planetData.mass.massValue,
					exponent: planetData.mass.massExponent,
				},
				revolutionSpeedInDays: planetData.sideralOrbit,
			});

			this.savePlanet(planet);

			return planet;
		} catch (e: any) {
			return ActionResult.ActionFailed(e.message);
		}

	}
}