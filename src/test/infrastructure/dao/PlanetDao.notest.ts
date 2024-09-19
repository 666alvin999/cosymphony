// import {PlanetDao} from "../../../main/infrastructure/dao/PlanetDao";
// import {Planet} from "../../../main/infrastructure/dto/Planet"
// import mongoose from "mongoose";

// describe("database functions", () => {
// 	let planetDao: PlanetDao;
//
// 	beforeAll(async () => {
// 		await mongoose.connect(`${process.env.MONGODB_COSYMPHONY_URL as string}`);
// 	});
//
// 	beforeEach(() => {
// 		planetDao = new PlanetDao();
// 	});
//
// 	it("should get Earth infos", () => {
// 		// Arrange
// 		const planetName: string = "terre";
//
// 		// Act
// 		const actualPlanet = planetDao.getPlanetByName(planetName);
//
// 		// Assert
// 		const expectedPlanet = new Planet({
// 			name: 'terre',
// 			type: 'Planet',
// 			mass: {
// 				value: 2,
// 				exponent: 2
// 			},
// 			revolutionSpeedInDays: 32
// 		});
//
// 		expect(actualPlanet).toStrictEqual(expectedPlanet);
// 	});
//
// 	afterAll(async () => {
// 		await mongoose.connection.close();
// 	});
// });