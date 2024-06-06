import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectionToDB from "../db/connectionToDB.js"


const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000



//MiddleWares
app.use(express.json()); // parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser())

app.use("/api/auth/",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


// Start Server 
app.listen(PORT,()=>{
        connectionToDB(); //Connect to Mongo DB
        console.log(`Hello there!!!.Server is listening at port:${PORT}`)
    });