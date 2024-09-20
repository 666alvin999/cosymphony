import {Planet} from "../dto/Planet.js";
import type {IPlanet} from "../dto/IPlanet";
import {ActionResult} from "../../domain/entity/ActionResult.js";

export class PlanetDao {

	public savePlanet(planet: IPlanet): ActionResult {
		try {
			planet.save();
			return ActionResult.ActionDone();
		} catch (e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	public async getPlanetByName(planetName: string): Promise<IPlanet | ActionResult> {
		try {
			return await this.getPlanetByNameUsingDBOrAPI(planetName);
		} catch (e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	private async getPlanetByNameUsingDBOrAPI(planetName: string): Promise<IPlanet | ActionResult> {
		try {
			const planet = await this.getPlanetByNameUsingDB(planetName);

			if (!planet) {
				return await this.getPlanetByNameUsingAPIAndSaveIntoDB(planetName);
			}

			return planet;
		} catch (e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	private async getPlanetByNameUsingDB(planetName: string): Promise<IPlanet | ActionResult> {
		try {
			return await Planet.findOne({id: planetName}).exec() as IPlanet;
		} catch (e: any) {
			return ActionResult.ActionFailed(e.message);
		}
	}

	private async getPlanetByNameUsingAPIAndSaveIntoDB(planetName: string): Promise<IPlanet | ActionResult> {
		try {
			const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
			const planetData = await response.json();
			const planet = new Planet({
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