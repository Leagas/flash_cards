import { Express, Request, Response } from "express"

import { card_controller } from "../controllers"

export function init_routes(app: Express): void {
	app.post(
		"/card/create",
		async (req: Request, res: Response): Promise<Response<any>> => {
			const result = await card_controller.create(req.body)

			if (result) {
				return res.sendStatus(200)
			}

			return res.sendStatus(400)
		}
	)

	app.post(
		"/card/fetch",
		async (req: Request, res: Response): Promise<Response<any>> => {
			const result = await card_controller.fetch(req.body)

			if (result) {
				return res.send(result).status(200)
			}

			return res.send(null).status(400)
		}
	)

	app.post(
		"/card/update",
		async (req: Request, res: Response): Promise<Response<any>> => {
			const result = await card_controller.update(req.body)

			if (result) {
				return res.sendStatus(200)
			}

			return res.sendStatus(400)
		}
	)
}
