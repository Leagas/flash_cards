import express from "express"
import { init_routes } from './src/routes/routes';
import { exec } from "child_process";
import { Log } from '../lib/logger';
import { init_db } from '../db';

process.on("SIGINT", () => {
	Log.info("\nShutting down...\n")

	exec("npm run db:stop", () => {
		process.exit();
	})
})

function main(port: number): void {
	const app = express();

	init_db();
	init_routes(app);

	app.listen(port, () => {
		Log.ok(`\nListening on ${port}\n`)
	})
}

main(3000);
