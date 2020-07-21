import { Card } from "../models/card"
import { database } from "../../../db"

export async function create(card: Card): Promise<void> {
	const query = `INSERT INTO Card (topic, question, answer) VALUES (?, ?, ?)`
	const params = [card.topic, card.question, card.answer]

	await database.query(query, params)
}

export async function fetch(topic: string[]): Promise<Card[] | void> {
	const query = `SELECT * FROM Card WHERE topic IN (?) ORDER BY RAND() LIMIT 1`
	const params = topic

	return await database.query(query, params)
}

export async function update(card: Card): Promise<Card[] | void> {
	const query = `UPDATE Card SET topic=?, question=?, answer=?, known=? WHERE id=?`
	const params = [card.topic, card.question, card.answer, card.known, card.id]

	return await database.query(query, params)
}

export function remove() {}
