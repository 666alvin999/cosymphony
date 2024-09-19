import {Request, Response} from "express";
import {PlanetDao} from "../../infrastructure/dao/PlanetDao.js";
import {PlanetMusicPresenter} from "../presenter/PlanetMusicPresenter.js";
import {GetPlanetMusic} from "../../domain/usecase/GetPlanetMusic.js";
import {PlanetMusicViewModel} from "../dto/out/PlanetMusicViewModel.js";
import {PlanetAdapter} from "../../infrastructure/adapter/PlanetAdapter.js";
import {Planet} from "../../infrastructure/dto/Planet.js";
import {PlanetMusicMapper} from "../../infrastructure/mapper/PlanetMusicMapper.js";

export class SpaceController {

	private getPlanetMusic: GetPlanetMusic<PlanetMusicViewModel>;
	private planetMusicPresenter: PlanetMusicPresenter;

	constructor() {
		const planetPort = new PlanetAdapter(new PlanetDao(), new PlanetMusicMapper());

		this.planetMusicPresenter = new PlanetMusicPresenter();
		this.getPlanetMusic = new GetPlanetMusic<PlanetMusicViewModel>(planetPort);
	}

	public async getPlanetMusicJSON(request: Request, response: Response): Promise<void> {

		const planetMusicViewModel: PlanetMusicViewModel = await this.getPlanetMusic.execute(request.params.planet, this.planetMusicPresenter);
		response.status(200).json(planetMusicViewModel);
	}

	public savePlanet(request: Request, response: Response): void {
		try {
			const planet = new Planet({name: "mars", type: "test", mass: {value: 3, exponent: 3}, revolutionSpeedInDays: 3});
			new PlanetDao().savePlanet(planet);
		} catch(e: any) {
			console.log(e.message);
		}

		response.send("o");
	}

}