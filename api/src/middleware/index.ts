import express from "express"
import { Express } from "express"

export function init_middleware(app: Express) {
	app.use(express.json())
}
