import { Card } from '../models/card'
import { database } from '../../../db'

export async function add(card: Card): Promise<void> {
	const query = `INSERT INTO Card (topic, question, answer) VALUES (?, ?, ?)`
	const params = [card.topic, card.question, card.answer]

	await database.query(query, params);
}

export function remove() {}
export function update() {}
