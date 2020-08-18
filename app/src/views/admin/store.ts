import { observable, action } from "mobx"
import { FormState, FieldState } from "formstate"

import { TForm } from "./model"

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
	public form: TForm;

	@action
	private init = () => {
		console.log("init")
	}

	@action
	public submit = () => {
		console.log("submit")
	}
}
