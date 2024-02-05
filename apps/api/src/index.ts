import express, { json } from "express"
import cors from "cors"
import { router } from "./router/router"

const app = express()
const PORT = process.env.PORT ? process.env.PORT : 8000

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE"],
    })
);
  
app.use(json());

app.use("/api/v1", router)



app.listen(PORT, ()=>{
    console.log(`Listning at port ${PORT}`);
    
})