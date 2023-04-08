import express from "express"
import cors from "cors"
// import connection from "./Config/db.js"
import mongoose from "mongoose"
import userRouter from "./Controllers/user-controller.js"
import blogrouter from "./Controllers/post-controller.js"
import { auth } from "./middlewares/auth.js"
import allblogrouter from "./Controllers/allpost-controller.js"
import * as dotenv from 'dotenv';
dotenv.config();

// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")

// const userRouter = require("./routes/user-routes.js")
// const blogrouter = require("./routes/post-route.js")
// const auth = require("./middlewares/auth.js")
// const allblogrouter = require("./routes/getAllPost-route.js")
// require("dotenv").config()



let connectionString = process.env.DATABASE_URL
let port = process.env.PORT || 8080;
const app = express()
app.use(express.json())
app.use(cors())



app.get('/', (req,res)=>{
  return res.status(200).json({
    "message": "Thank you for visiting this website"
  });
})

app.use("/blogs", allblogrouter)
app.use("/user",userRouter) 
app.use(auth)
app.use("/blog", blogrouter)

mongoose.set('strictQuery', true);
mongoose
  .connect(connectionString)
  .then(() => app.listen(port))
  .then(() => 
      console.log("server is running on http://localhost:"+ port)
  )
  .catch((err) => console.log(err)) 



