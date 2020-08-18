import { FormState, FieldState } from "formstate"

export type Card = {
	id: number
	topic: string
	question: string
	answer: string
}

export enum TField {
	question = "question",
	answer = "answer",
	topic = "topic",
	image = "image"
}

export type TForm = FormState<{
	[k in TField]: FieldState<string>
}>
