import { RequestHandler } from "express"
import { getUsers } from "../../prisma/getUsers"

export const getAllUser: RequestHandler = async(req, res) =>{
    const allUsers = await getUsers()
    res.json({allUsers})
}