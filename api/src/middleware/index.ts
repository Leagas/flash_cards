import express from "express"
import { Express } from "express"
import path from "path"

export function init_middleware(app: Express) {
	app.use(express.json())
	app.use(express.static(path.join(__dirname, "../../../public")))
}
