import { Card, Topic } from "../models/card"

import { card_dao } from "../dao"
import { Log } from "../../../lib/logger"

export async function create(card: Card): Promise<boolean> {
	try {
		await card_dao.create(card)

		return true
	} catch (err) {
		Log.error(`\n${err}\n`)

		return false
	}
}

export async function fetch(topic: string[]): Promise<Card[] | void> {
	try {
		return await card_dao.fetch(topic)
	} catch (err) {
		Log.error(`\n${err}\n`)
	}
}

export async function update(card: Card): Promise<boolean> {
	try {
		await card_dao.update(card)

		return true
	} catch (err) {
		Log.error(`\n${err}\n`)

		return false
	}
}

export async function remove(id: number[]): Promise<boolean> {
	try {
		await card_dao.remove(id)

		return true
	} catch (err) {
		Log.error(`\n${err}\n`)

		return false
	}
}

export async function topics(): Promise<Topic[] | void> {
	try {
		return await card_dao.topics()
	} catch (err) {
		Log.error(`\n${err}\n`)
	}
}
