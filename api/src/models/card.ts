import { Request } from "express"

export type Card = {
	id?: number
	topic: string
	question: string
	answer: string
	image?: string
	known?: number
}

export type Topic = {
	id: number
	subject: string
	topic: string
}

export interface CardRequest<Body> extends Request {
	body: Body
}
