import { Express, Request, Response } from "express";

import { card_controller } from "../controllers"

export function init_routes(app: Express): void {
	app.post("/card/add", (req: Request, res: Response): Response<any> => {
		const result = card_controller.add(req.body)

		if (result) {
			return res.sendStatus(200)
		}

		return res.sendStatus(400)
	})
}
