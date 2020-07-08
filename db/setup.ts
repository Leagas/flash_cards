import { Connection } from "mysql"
import { connect, readFile, query } from "./utils"
import { db, ARTIFACTS_DIR } from "../config"

async function setup(connection: Connection): Promise<void> {
	const schema = await readFile(ARTIFACTS_DIR, "init.sql")

	console.log("Creating database schema...")
	await query(connection, schema)
}

async function main() {
	try {
		const connection = await connect(db)
		await setup(connection)
		console.log("Setup complete")
	} catch (err) {
		console.log(err)
	}
}

main()
