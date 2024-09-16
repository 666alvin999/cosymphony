import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
	console.log("request recieved");
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=8761a2948615a63f74975d76600cc936`);
	res.send(await response.json());
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});