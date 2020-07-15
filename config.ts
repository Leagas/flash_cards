import { ConnectionConfig } from "mysql"
import path from "path"

export const db: ConnectionConfig = {
	multipleStatements: true,
	host: "127.0.0.1",
	user: "root",
	password: "root",
	port: 3310,
}

export const ARTIFACTS_DIR = path.join(__dirname, "./db/artifacts")
