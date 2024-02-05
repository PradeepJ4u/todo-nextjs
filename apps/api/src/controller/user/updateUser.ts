import { RequestHandler } from "express"

export const updateUser: RequestHandler = (req, res) =>{
res.json({message: "inside update user"})
}