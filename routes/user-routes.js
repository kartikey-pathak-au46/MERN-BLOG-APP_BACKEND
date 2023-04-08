// const express = require("express")
// const { getAllUser, Signup, Login, EditProfile, FindUserByID } = require("../Controllers/user-controller.js")

import getAllUser from "../Controllers/user-controller.js"
import Signup from "../Controllers/user-controller.js"
import Login from "../Controllers/user-controller.js"
import EditProfile from "../Controllers/user-controller.js"
import GetUserById from "../Controllers/user-controller.js"


import express from "express"
const userRouter = express.Router()

userRouter.get("/", getAllUser)
userRouter.post("/signup", Signup)
userRouter.post("/login", Login)
userRouter.patch("/edit/:id", EditProfile)
userRouter.get('/:id', FindUserByID)




export default userRouter
// module.exports = userRouter