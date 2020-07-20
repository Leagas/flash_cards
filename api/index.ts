import express from "express"
import { init_routes } from "./src/routes/routes"
import { exec } from "child_process"
import { Log } from "../lib/logger"
import { init_db } from "../db"
import { init_middleware } from "./src/middleware"

process.on("SIGINT", () => {
	Log.info("\nShutting down...\n")

	exec("npm run db:stop", () => {
		process.exit()
	})
})

async function main(port: number): Promise<void> {
	const app = express()

	await init_db()
	init_middleware(app)
	init_routes(app)

	app.listen(port, () => {
		Log.ok(`\nListening on ${port}\n`)
	})
}

main(3000)
