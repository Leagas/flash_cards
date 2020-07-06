import { Express, Request, Response } from "express";

import { card } from "../controllers"

export function initRoutes(app: Express) {

	app.get("/card/add", (req: Request, res: Response) => {
		res.send(card.add())
	})
}
