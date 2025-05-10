import {Schema, model } from "mongoose"

const User_Model_  = model("User",Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    age: {
        type:Number,
        required:true
    },
    email : {
        type:String, 
        required:true,
        unique:true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']     
    },
    password :{
        type:String,
        required:true
    }
}))

export default User_Model_