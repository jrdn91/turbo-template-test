import { Request } from "express"
import { z } from "zod"

import { DefaultResponse } from "../common/api"

export const getUserSchema = {
	params: z.object({
		userId: z.string(),
	}),
}

type GetUserRequestParams = z.input<typeof getUserSchema.params>

export type GetUserRequest = Request<GetUserRequestParams, never, never, never>

export type GetUserResponse = DefaultResponse<User>
