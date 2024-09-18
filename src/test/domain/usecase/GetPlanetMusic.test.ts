import {PlanetAdapterMock} from "../../mock/PlanetAdapterMock";
import {PlanetMusicPresenterMock} from "../../mock/PlanetMusicPresenterMock";
import {GetPlanetMusic} from "../../../main/domain/usecase/GetPlanetMusic";
import {PlanetMusicViewModel} from "../../../main/application/dto/out/PlanetMusicViewModel";
import {Synth} from "../../../main/domain/entity/Synth";

describe("Get planet's music", () => {
	let getPlanetMusic: GetPlanetMusic<PlanetMusicViewModel>;
	const planetPort = new PlanetAdapterMock();
	const planetMusicPresentationPort = new PlanetMusicPresenterMock();

	beforeEach(() => {
		getPlanetMusic = new GetPlanetMusic<PlanetMusicViewModel>(
			planetPort
		);
	})

	it("should return planet's music by name", async () => {
		// Arrange
		const planetName: string = "earth";

		// Act
		const actualPlanetMusicViewModel = await getPlanetMusic.execute(planetName, planetMusicPresentationPort);

		// Assert
		const expectedPlanetMusicViewModel = new PlanetMusicViewModel(100, ["", ""], Synth.MonoSynth);

		expect(actualPlanetMusicViewModel).toStrictEqual(expectedPlanetMusicViewModel);
	})
})