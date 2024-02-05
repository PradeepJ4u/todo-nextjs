import { Router } from "express"
import { getAllTodos } from "../controller/todo/getAllTodos"
import { getTodoById } from "../controller/todo/getTodoById"
import { updateTodo } from "../controller/todo/updateTodo"
import { insertTodo } from "../controller/todo/insertTodo"

export const todoRouter = Router()

todoRouter.get("/get-all-todos", getAllTodos)
todoRouter.get("/get-todo/:id", getTodoById)
todoRouter.put("/update/:id", updateTodo)
todoRouter.post("/add", insertTodo)