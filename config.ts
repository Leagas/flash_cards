import { ConnectionConfig } from "mysql"
import path from "path"

export const db: ConnectionConfig = {
	multipleStatements: true,
	host: "192.168.0.50",
	user: "root",
	password: "root",
	port: 3306,
}

// path relative from dist
export const ARTIFACTS_DIR = path.join(__dirname, "../db/artifacts")
