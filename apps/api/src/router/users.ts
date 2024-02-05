import { Router } from "express"
import { getAllUser } from "../controller/user/getAllUsers"
import { getUserById } from "../controller/user/getUserById"
import { updateUser } from "../controller/user/updateUser"
import { insertUser } from "../controller/user/insertUser"

export const userRouter = Router()

userRouter.get("/get-all-users", getAllUser)
userRouter.get("/get-user/:id", getUserById)
userRouter.put("/update/:id", updateUser)
userRouter.post("/add", insertUser)