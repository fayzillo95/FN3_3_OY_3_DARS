import {Schema,model} from "mongoose"

import User_Module_ from "./User_Module_.js"

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