import { Card } from '../models/card';

import { card_dao } from "../dao"
import { Log } from '../../../lib/logger';

export async function create(card: Card): Promise<boolean> {
	try {
		await await card_dao.create(card)

		return true
	} catch(err) {
		Log.error(`\n${err}\n`)

		return false
	}
}

export async function fetch(topic: string[]): Promise<Card[] | void> {
	try {
		return await card_dao.fetch(topic)
	} catch(err) {
		Log.error(`\n${err}\n`)
	}
}
