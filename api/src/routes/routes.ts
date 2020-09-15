import { Express, Response, Request } from "express"
import path from "path"

import { card_controller } from "../controllers"
import { CardRequest, Card } from "../models/card"

export function init_routes(app: Express): void {
	app.post(
		"/card/create",
		async (req: CardRequest<Card>, res: Response): Promise<Response<any>> => {
			const result = await card_controller.create(req.body)

			if (result) {
				return res.sendStatus(200)
			}

			return res.sendStatus(400)
		}
	)

	app.post(
		"/card/fetch",
		async (req: CardRequest<string[]>, res: Response): Promise<Response<Card>> => {
			const result = await card_controller.fetch(req.body)

			if (result) {
				return res.send(result).status(200)
			}

			return res.send(null).status(400)
		}
	)

	app.post(
		"/card/update",
		async (req: CardRequest<Card>, res: Response): Promise<Response<any>> => {
			const result = await card_controller.update(req.body)

			if (result) {
				return res.sendStatus(200)
			}

			return res.sendStatus(400)
		}
	)

	app.post(
		"/card/remove",
		async (req: CardRequest<number[]>, res: Response): Promise<Response<any>> => {
			const result = await card_controller.remove(req.body)

			if (result) {
				return res.sendStatus(200)
			}

			return res.sendStatus(400)
		}
	)

	app.get(
		"/card/topics",
		async (_, res: Response): Promise<Response<any>> => {
			const result = await card_controller.topics()

			if (result) {
				return res.send(result).status(200)
			}

			return res.sendStatus(400)
		}
	)

	app.get("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "../../../public/index.html"))
	})
}
