
import mongoose from "mongoose";
import Post from "../Models/post.model.js";
import User from "../Models/user.model.js"
import express from "express"


const allblogrouter = express.Router()



async function getAllPost(req, res, next){
    let blogs;
    try {
        blogs = await Post.find().populate("user")
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "error"})
    }
    if(!blogs){
        return res.status(404).json({message:"No Blogs Found"})
    }
    return res.status(200).json({blogs})
}


allblogrouter.get("/", getAllPost)

export default allblogrouter