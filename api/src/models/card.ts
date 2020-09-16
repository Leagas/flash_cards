import { Request } from "express"

export type Card = {
	id?: number
	subject: string
	topic: string
	question: string
	answer: string
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
