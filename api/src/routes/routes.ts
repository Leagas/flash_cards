import { Express, Request, Response } from "express";

import { card_controller } from "../controllers"

export function init_routes(app: Express): void {
	app.get("/card/add", (req: Request, res: Response): Response<any> => {
		const result = card_controller.add(req.body)

		if (result) {
			return res.send(200)
		}

		return res.send(400)
	})
}
2
