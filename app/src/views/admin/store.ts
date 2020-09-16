import { observable, action } from "mobx"
import { FormState, FieldState } from "formstate"

import { TForm, TField, Topic } from "./model"
import { services } from '../../services'

export class Admin {
	constructor() {
		this.init()
		this.form = new FormState({
			question: new FieldState(""),
			answer: new FieldState(""),
			subject: new FieldState(""),
			topic: new FieldState(""),
			image: new FieldState(""),
		})
	}

	@observable
	public form: TForm

	@observable
	public image: string = ""

	@observable
	public subjects: string[] = []

	@observable
	public topics: Topic[] = []

	@action
	private init = () => {
		this.getTopics()
	}

	@action
	public submit = () => {
		console.log(this.form.$.question.value)
		console.log(this.form.$.answer.value)
		console.log(this.image)
		console.log(this.form.$.topic.value)
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
		this.topics = await services.fetchTopics();
		this.subjects = [...new Set(this.topics.map(topic => topic.subject))]
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
