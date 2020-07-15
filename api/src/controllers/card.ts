import { Card } from '../models/card';

import { card_dao } from "../dao"
import { Log } from '../../../lib/logger';

export async function add(card: Card): Promise<Card | void> {
	try {
		return await card_dao.add(card);
	} catch(err) {
		Log.error(`\n${err}\n`)
	}
}
