import { observable, action } from "mobx"
import { FormState, FieldState } from "formstate"

import { TForm, TField } from "./model"

export class Admin {
	constructor() {
		this.init()
		this.form = new FormState({
			question: new FieldState(""),
			answer: new FieldState(""),
			topic: new FieldState(""),
			image: new FieldState(""),
		})
	}

	@observable
	public form: TForm

	@observable
	public image: string = ""

	@observable
	public topic: string[] = []

	@action
	private init = () => {
		// fetch topics
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
