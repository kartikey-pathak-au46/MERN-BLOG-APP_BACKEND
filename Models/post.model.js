
// var mongoose = require('mongoose');
import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
    {
        title: {
            type : String,
            required : true
        },
        description : {
            type : String,
            required: true,
        },
        image: {
            type : String,
        },
        user:{
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
      }
)

// module.exports =  mongoose.model("post", postSchema)
export default mongoose.model("post", postSchema)