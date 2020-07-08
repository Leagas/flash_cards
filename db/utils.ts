import mysql from "mysql"
import { Connection, ConnectionConfig } from "mysql"
import * as fs from "fs"
import path from "path"

export function disconnect(connection: Connection) {
	connection.end((err) => {
		if (err) {
			throw err
		}
		console.log("Disconnecting...")
	})
}

export async function connect(db: ConnectionConfig): Promise<Connection> {
	console.log("Creating database connection...")

	return mysql.createConnection(db)
}

export async function query(connection: Connection, schema: string) {
	connection.query(schema, (error, results, fields) => {
		if (error) {
			throw error
		}
	})
	connection.end()
}

export async function readFile(dir: string, file: string): Promise<string> {
	const schema = path.join(dir, file)

	return new Promise((resolve, reject) => {
		fs.readFile(schema, "utf8", (err, data: string) => {
			if (err) {
				return reject(err)
			}
			return resolve(data)
		})
	})
}
