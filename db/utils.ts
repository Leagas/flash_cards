import mysql from "mysql"
import { Connection, ConnectionConfig } from "mysql"
import * as fs from "fs"
import path from "path"
import { Log } from '../lib/logger'

function wait(waitTime: number) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), waitTime)
	})
}

export async function pingUntilReady(connection: Connection, limit: number = 25) {
	Log.warn("Waiting for database ...\n")
	for (let attempts = 1; attempts <= limit; attempts++) {
		const waitTime = 500 * attempts
		try {
			await new Promise((resolve, reject) => {
				connection.ping((err) => {
					if (err) {
						return reject(err)
					}
					process.stdout.write("\n")
					return resolve()
				})
			})
			return true
		} catch (e) {
			Log.warn(".")
			await wait(waitTime)
		}
	}

	return false
}

export function disconnect(connection: Connection) {
	connection.end((err) => {
		if (err) {
			throw err
		}
		Log.info("Disconnecting ...\n")
	})
}

export async function connect(db: ConnectionConfig): Promise<Connection> {
	Log.info("Creating database connection ...\n")

	return mysql.createConnection(db)
}

export async function query(connection: Connection, schema: string) {
	connection.query(schema, (error) => {
		if (error) {
			throw error
		}
	})

	disconnect(connection)
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
