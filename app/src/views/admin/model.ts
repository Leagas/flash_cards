import { FormState, FieldState } from "formstate"

export type Card = {
	id?: string
	topic: string
	question: string
	answer: string
	image?: string
}

export enum TField {
	id = "id",
	question = "question",
	answer = "answer",
	subject = "subject",
	topic = "topic",
	image = "image"
}

export type Topic = {
	id: string,
	subject: string
	topic: string
}

export type TForm = FormState<{
	[k in TField]: FieldState<string>
}>
