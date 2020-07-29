import { observable, action } from "mobx"
import { Card } from "./model"

export class Admin {
	constructor() {
		this.init()
	}

	@observable
	data: Card[] = []

	@action
	init = () => {
		console.log("init")
	}
}
