import { RequestHandler } from "express"

export const insertUser: RequestHandler = (req, res) =>{
res.json({message: "inside insert user"})
}