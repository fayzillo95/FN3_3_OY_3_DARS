import {Schema,model} from "mongoose"

import User_Model_ from "./User_Model_.js"

export default new model("Post", new Schema({
    title:{
        type:String, 
        default : "title"
    },
    description : {
        type:String,
        required:true
    },
    user_id : {
        type : Schema.Types.ObjectId,
        ref: "User"
    }
}));