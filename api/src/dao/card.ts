import { Card, Topic } from "../models/card"
import { database } from "../../../db"

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]

export async function create(card: Card): Promise<any> {
	const fields: any[] = Object.keys(card)
	const query = `INSERT INTO Card (${fields}) VALUES (${fields.map((_) => `?`)})`
	const params = fields.map((field) => getProperty<Card, keyof Card>(card, field))

	return await database.query(query, params)
}

export async function fetch(topic: string[]): Promise<Card[] | void> {
	const query = `SELECT * FROM Card WHERE topic IN (?) ORDER BY RAND() LIMIT 1`
	const params = topic

	return await database.query(query, params)
}

export async function update(card: Card): Promise<any> {
	const query = `UPDATE Card SET topic=?, question=?, answer=?, known=? WHERE id=?`
	const params = [card.topic, card.question, card.answer, card.known, card.id]

	return await database.query(query, params)
}

export async function remove(id: number[]): Promise<void> {
	const query = `DELETE FROM Card WHERE id IN (?)`
	const params = [id]

	return await database.query(query, params)
}

export async function topics(): Promise<Topic[]> {
	const query = `
	SELECT t.id, s.name as subject, topic
	FROM Topic t
	JOIN Subject s ON t.subject=s.id`

	return await database.query(query)
}
