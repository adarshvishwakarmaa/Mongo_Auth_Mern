import express from 'express'
import dotenv from 'dotenv'
import myDbConnect from './config/db.js'
import authRouter from './routes/authRoute.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
import userRouter from './routes/userRoute.js'

dotenv.config()

let port = process.env.PORT || 3000

let app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5147",
    credentials:true
}))

//Route
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(port,()=>{
    myDbConnect()
    console.log("Server Started");
    
})