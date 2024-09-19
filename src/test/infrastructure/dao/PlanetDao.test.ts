import {PlanetDao} from "../../../main/infrastructure/dao/PlanetDao";
import mongoose from "mongoose";

describe("database functions", () => {
	let planetDao: PlanetDao;

	beforeAll(async () => {
		await mongoose.connect(`${process.env.MONGODB_COSYMPHONY_URL as string}`);
	});

	beforeEach(() => {
		planetDao = new PlanetDao();
	});

	afterAll(async () => {

	});
});