import express from "express"
import { initRoutes } from './src/routes/routes';
import { exec } from "child_process";

process.on("SIGINT", () => {
	console.log("\nShutting down...")

	exec("docker-compose down", () => {
		process.exit();
	})
})

function main(port: number): void {
	const app = express();

	initRoutes(app);

	app.listen(port, () => {
		console.log(`Listening on ${port}`)
	})
}

main(3000);
