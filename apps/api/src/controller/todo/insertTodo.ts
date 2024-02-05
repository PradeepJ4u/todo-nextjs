import { RequestHandler } from "express"

export const insertTodo: RequestHandler = (req, res) =>{
res.json({message: "inside insert todos"})
}