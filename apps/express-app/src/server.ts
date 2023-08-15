import { json, urlencoded } from "body-parser"
import cors from "cors"
import { prisma, User } from "database"
import express, { Request, Response } from "express"
import morgan from "morgan"

export const createServer = () => {
	const app = express()
	app
		.disable("x-powered-by")
		.use(morgan("dev"))
		.use(urlencoded({ extended: true }))
		.use(json())
		.use(cors())
		.get("/message/:name", (req, res) => {
			return res.json({ message: `hello ${req.params.name}` })
		})
		.get("/healthz", (req, res) => {
			return res.json({ ok: true })
		})
		.get(
			"/users",
			async (req: Request, res: Response<{ users: Array<User> }>) => {
				const users = await prisma.user.findMany()
				return res.json({ users })
			}
		)

	return app
}
