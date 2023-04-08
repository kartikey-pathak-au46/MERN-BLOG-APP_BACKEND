// const getAllPost = require("../Controllers/post-controller.js")
// const express = require("express")


import express from "express"
import getAllPost from "../Controllers/post-controller"


const allblogrouter = express.Router()
allblogrouter.get("/", getAllPost)

export default allblogrouter
// module.exports = allblogrouter