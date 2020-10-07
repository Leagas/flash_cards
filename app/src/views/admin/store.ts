import { observable, action } from "mobx"
import { FormState, FieldState } from "formstate"

import { TForm, TField, Topic, Card } from "./model"
import { services } from '../../services'
import { isRequired, minLength } from '../../library/validators'

export class Admin {
	constructor() {
		this.init()
		this.form = new FormState({
			id: new FieldState(""),
			question: new FieldState("").validators(isRequired, minLength),
			answer: new FieldState("").validators(isRequired, minLength),
			subject: new FieldState("").validators(isRequired),
			topic: new FieldState("").validators(isRequired),
			image: new FieldState(""),
		})
	}

	@observable
	public form: TForm

	@observable
	public error: string = ""

	@observable
	public status: string = ""

	@observable
	public image: string = ""

	@observable
	public subjects: string[] = []

	@observable
	public topics: Topic[] = []

	@action
	private init = (): void => {
		this.getTopics()
	}

	@action
	public create = async (): Promise<void> => {
		try {
			const payload = await this.getPayload()

			await services.createCard(payload)

			this.handleStatus("Card Created!")
			this.resetForm();
		} catch (err) {			
			this.handleError(err|| "Failed to validate payload")
		}
	}

	@action
	public update = async (id: string): Promise<void> => {
		try {
			const payload = await this.getPayload(id)

			await services.updateCard(payload)

			this.handleStatus("Card Updated!")
			this.resetForm();
		} catch (err) {
			this.handleError(err|| "Failed to validate payload")
		}
	}

	@action
	public handleChange = async <T extends HTMLInputElement | HTMLSelectElement>(
		event: React.ChangeEvent<T>,
		field: TField
	): Promise<void> => {
		event.persist()
		this.form.$[field].onChange(event.target.value)

		if (this.hasFile(event) && event.target.files) {
			this.image = await this.handleFileAsBase64(event.target.files)
		}
	}

	@action
	private getTopics = async (): Promise<void> => {
		try {
			this.topics = await services.fetchTopics();
			this.subjects = [...new Set(this.topics.map(topic => topic.subject))]
		} catch (err) {
			this.handleError("Failed to fetch topics")
		}
	}

	@action
	private handleError = (error: string): void => {		
		this.error = error
	}

	@action
	private handleStatus = (status: string): void => {
		this.status = status
	}

	@action
	private resetForm = (): void => {
		this.form.$.question.value = ""
		this.form.$.answer.value = ""
		this.form.$.image.value = ""
		this.image = ""
	}

	private getPayload = async (id?: string): Promise<Card | never> => {
		const result = await this.form.validate()

		if (result.hasError) {
			throw "Please fill in required fields"
		}

		this.handleError("")

		const {
			question,
			answer,
			topic,
			image
		} = this.form.$

		let payload: Card = {
			question: question.value,
			answer: answer.value,
			topic: topic.value,
		}

		if (id) {
			payload.id = id
		}

		if (image.value) {
			payload.image = this.image
		}

		return payload
	}

	private handleFileAsBase64 = (files: FileList): Promise<string> => {
		return new Promise((res, rej) => {
			const reader = new FileReader()
			reader.onerror = rej
			reader.onloadend = function () {
				return res(reader.result as string)
			}
			reader.readAsDataURL(files[0])
		})
	}

	private hasFile = (event: React.ChangeEvent<unknown>): event is React.ChangeEvent<HTMLInputElement> => {
		return (event as React.ChangeEvent<HTMLInputElement>).target.files !== null
	}
}
