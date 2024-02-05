import { RequestHandler } from "express"

export const getUserById: RequestHandler = (req, res) =>{
res.json({message: "inside getTodoById user"})
}