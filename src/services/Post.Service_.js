import Post_Model_ from "../Modules/Post_Model_.js";
import User_Model_ from "../Modules/User_Model_.js";
import CustomError from "../utils/Custum.Error_.js";

import {Types} from "mongoose";
const isValidId = Types.ObjectId.isValid;

async function isvalidData(data) {
    if(!data.user_id) throw new CustomError("Invalid data not found user_id  ! ",400)
    
    for (let key in data) {
        if(!["title",'description','user_id'].includes(key)) {
            throw new CustomError(`Invalid key ${key} ! `,400);
        }
        if(key == 'user_id'){
            if(!isValidId(data[key])) throw new CustomError("Invalid Userid  ! ",400)
            const user = User_Model_.findById(data[key])
            if(!user) throw new CustomError(`User not found ! post created not acceptly`,406);
        }
    }

    return true
}

async function isValidUpdated_data(data) {
    for(let key in data){
         if(!["title",'description'].includes(key)) {
            throw new CustomError(`Invalid key ${key} ! `,400);
        }
        if(key == 'user_id'){
            throw new CustomError(`Updated user_id not acceptly ! `,400);
        }
    }
}

export default class PostsService {
    constructor() {}

    async getAll () {
        const posts = await Post_Model_.find()
        return posts;
    }
    async getById(id) {
        const result = await Post_Model_.findById(id)
        if(!result) throw new CustomError("Post not found ! ",404);
        return result;        
    }
    async createItem(data) {
        isvalidData(data)
        const result = Post_Model_.create(data);
        return result;        
    }
    async deleteItem(id) {
        if(!isValidId(id)) throw new CustomError("Invalid id ",400);
        const result = await Post_Model_.findByIdAndDelete(id)
        if(!result) throw new CustomError("Post not found ! ",404);
        return result;
    }
    async updateItem(data, id) {
        if(!isValidId(id)) throw new CustomError("Invalid id ",400)
        await isValidUpdated_data(data)
    }
}