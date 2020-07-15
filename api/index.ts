import express from "express"
import { initRoutes } from './src/routes/routes';
import { exec } from "child_process";
import { Log } from '../lib/logger';

process.on("SIGINT", () => {
	Log.info("\nShutting down...")

	exec("npm run db:stop", () => {
		process.exit();
	})
})

function main(port: number): void {
	const app = express();

	initRoutes(app);

	app.listen(port, () => {
		Log.ok(`Listening on ${port}`)
	})
}

main(3000);
