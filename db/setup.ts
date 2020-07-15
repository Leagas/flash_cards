import { Connection } from "mysql"
import { connect, readFile, query, pingUntilReady } from "./utils"
import { db, ARTIFACTS_DIR } from "../config"
import { Log } from '../lib/logger'

async function setup(connection: Connection): Promise<void> {
	const schema = await readFile(ARTIFACTS_DIR, "init.sql")

	await pingUntilReady(connection)

	Log.info("Creating database schema ...")
	await query(connection, schema)
}

async function main() {
	try {
		const connection = await connect(db)
		await setup(connection)
		Log.ok("Setup complete")
	} catch (err) {
		Log.error(err)
	}
}

main()
