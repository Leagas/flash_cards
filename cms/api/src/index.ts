import express from "express"
import { initRoutes } from './routes/routes';

function main(port: number) {
	const app = express();

	initRoutes(app);

	app.listen(port)
}

main(3000);
