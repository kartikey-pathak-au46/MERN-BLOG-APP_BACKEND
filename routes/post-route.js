// const express = require("express")
// const {getAllPost, addPost, updatePost, getById, deletePost, getByUserId   } = require("../Controllers/post-controller.js") 

import express from "express"
import getAllPost from "../Controllers/post-controller.js"
import addPost from "../Controllers/post-controller.js"
import updatePost from "../Controllers/post-controller.js"
import getById from "../Controllers/post-controller.js"
import deletePost from "../Controllers/post-controller.js"
import getByUserId from "../Controllers/post-controller.js"

const blogrouter = express.Router()

blogrouter.get("/", getAllPost)
blogrouter.post("/add", addPost)
blogrouter.patch("/update/:id", updatePost)
blogrouter.get("/:id", getById)
blogrouter.delete("/:id" , deletePost)
blogrouter.get("/user/:id", getByUserId)

export default blogrouter;
// module.exports = blogrouter