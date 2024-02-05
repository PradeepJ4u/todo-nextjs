import { RequestHandler } from "express"

export const updateTodo: RequestHandler = (req, res) =>{
res.json({message: "inside update todo"})
}