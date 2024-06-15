import express from "express"
import dotenv from "dotenv"
import {dbConnect} from "./utils/index.js"
import mongoose  from "mongoose"
import bodyParser from "body-parser"
import UserRoutes from "./routes/user.routes.js"
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT


dbConnect()
.then (()=>{
    app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}`)
})}
)
.catch((err)=>{
    console.log("cannot connect to database")
})

app.use('/user',UserRoutes)