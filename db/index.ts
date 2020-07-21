import mysql, { Pool, Query, createConnection } from "mysql"
import { ConnectionConfig } from 'mysql';
import { db } from "../config"

type Database = {
	connection_pool: Pool;
	query: (schema: string, params: any[]) => void
}

function create_pool(db: ConnectionConfig): Pool {
	return mysql.createPool({
		connectionLimit: 10,
		database: "card_db",
		...db
	});
}

function query<Result = any>(schema: string, params: string[], pool: Pool): Promise<Result> {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, conn) => {
			if (err) reject(err)
			conn.query({
				sql: schema,
				values: params
			}, (err, results: Result) => {
				conn.release();
				if (err) reject(err)
				resolve(results)
			})
		})
	})
}

export const database: Database = {} as  Database

export async function init_db() {
	database.connection_pool = create_pool(db);
	database.query = (schema, params) => query(schema, params, database.connection_pool)
}
