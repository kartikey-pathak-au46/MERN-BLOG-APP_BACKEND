// const mongoose = require("mongoose")
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required: true,
        minlength : 6
    },
    tagline : {
        type : String,
    },
    bio : {
        type : String,
    },
    mobile : {
        type : String,
    },
    avatar : {
        type : String,
    },
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:"post",
        required:true
    }]
    },

    {
    versionKey: false,
    timestamps: true
  }
);

const user = mongoose.model("User", userSchema)

// module.exports = user

export default user