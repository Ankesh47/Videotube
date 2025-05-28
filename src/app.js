import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true

}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());

// routings....

import userRouter from './routes/user.routes.js';
// import userRouter from './'


// declaration...
// we don't use app.get() here, because we are importing routes. now we have to bring middleware for routing.

app.use("/api/v1/users", userRouter) 



export { app }