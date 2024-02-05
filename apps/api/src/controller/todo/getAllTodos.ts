import { RequestHandler } from "express"

export const getAllTodos: RequestHandler = (req, res) =>{
res.json({message: "inside all todos"})
}