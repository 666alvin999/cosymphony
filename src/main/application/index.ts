import express, {Express} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {spaceRouter} from "./router/space.route.js";
import {weatherRouter} from "./router/weather.route.js";


dotenv.config();
const app: Express = express();
const port = process.env.port || 3000;
app.use(express.json());


app.listen(port, () => {
	console.log(`[SERVER] Listening on port ${port}`);
});

try {
	await mongoose.connect(`${process.env.MONGODB_COSYMPHONY_URL as string}`);
	console.log("[SERVER] Mongo DB connection established");

	app.use("/space", spaceRouter)
	app.use("/weather", weatherRouter)
} catch (e: any) {
	console.log(e.message);
}

export default app;