import { PrismaClient } from "database"
 
const prisma = new PrismaClient();

export const getUsers = async() =>{

    const allUsers = await prisma.users.findMany({
        include:{
            todos: true,
            allTodos: true
        }
    })
    console.dir(allUsers, { depth: null });
    return allUsers
}