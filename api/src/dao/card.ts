import { Card } from '../models/card'

export async function add(card: Card): Promise<Card> {
	const sql = `INSERT INTO Card (topic, question, answer) VALUES (${card.topic}, ${card.question}, ${card.answer})`

	return card
}

export function remove() {}
export function update() {}
