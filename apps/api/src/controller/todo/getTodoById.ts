import { RequestHandler } from "express"

export const getTodoById: RequestHandler = (req, res) =>{
res.json({message: "inside getTodoById todo"})
}