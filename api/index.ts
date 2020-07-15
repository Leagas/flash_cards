import express from "express"
import { initRoutes } from './src/routes/routes';
import { exec } from "child_process";
import { Log } from '../lib/logger';

process.on("SIGINT", () => {
	Log.info("\nShutting down...\n")

	exec("npm run db:stop", () => {
		process.exit();
	})
})

function main(port: number): void {
	const app = express();

	initRoutes(app);

	app.listen(port, () => {
		Log.ok(`\nListening on ${port}\n`)
	})
}

main(3000);
