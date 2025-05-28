// require('dotenv').config({path: './env'});
// // this is as per documentation of dotenv, for more consistency we write it in import format and make changes in package.json dev scripts
import dotenv from "dotenv"
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
import connectDB from "./db/index.js"
import {app} from './app.js'

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed!", err);
})










/*
// this is to connect db from index.js directly

import express from "express"
const app = express()
// here we can add listeners below await by using app.on()

// **IIFE (Immediately Invoked Function Expression)** is a JavaScript function that runs as soon as it is defined.
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR : ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);

        })
    }
    catch(error){
        console.error("ERROR", error)
        throw err
    }
})()

*/