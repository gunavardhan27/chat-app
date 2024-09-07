import express from "express"
import http from "http"
import dotenv from "dotenv"
import connectToMongodb from "./db/connectToMongo.js"
import userRoute from './routes/user.routes.js'
import cookieParser from "cookie-parser"
import cookieJwtAuth from './middleware/cookieJwtAuth.js'
import messageRoute from './routes/message.route.js'
import cors from 'cors'
const PORT = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)
dotenv.config()
app.use(cors({origin: 'http://localhost:3000',credentials:true})); 
app.use(express.json()) // to parse requests from req.body
app.use(cookieParser())

app.use("/api/users",userRoute)
app.use("/api/messages",cookieJwtAuth,messageRoute)
server.listen(PORT,()=>{
    connectToMongodb()
    console.log(`server running on port ${PORT}`)
})