import { Router } from "express"
import { userRouter } from "./users"
import { todoRouter } from "./todo"

export const router = Router()

router.use("/user", userRouter)
router.use("/todo", todoRouter)