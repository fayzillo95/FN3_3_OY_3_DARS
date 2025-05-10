import Posts_Modules_ from "../Modules/Posts_Modules_.js";
import User_Module_ from "../Modules/User_Module_.js";
import CustomError from "../utils/Custum.Error_.js";

import {Types} from "mongoose";
const isValidId = Types.ObjectId.isValid;


async function isvalidData(data) {
    
    if(Object.keys(data).length < 4) {
        throw new CustomError("Invali data keys length min 4 ",400)
    }
    
    if(Object.values(data).includes(undefined)){
        throw new CustomError("Invalid data undefined value ",400)
    } 
    
    if(data.username.length < 3 || 
        !/^[A-za_z0-9]+$/.test(data.username)) {
            throw new CustomError("Invalid username ",400)
        }

    if(isNaN(+data.age)) {
        throw new CustomError("Invalid age non type Number !",400)
    }

    for(let key in data){
        if(!['username','email','age','password'].includes(key)){
            throw new CustomError(`Invalid key user schema not in \'${key}\' !`,400)
        }
    }
}

async function isValidUpdated_data(data) {
    for(let key in data){

        if(!['username','email','age','password'].includes(key)){
            throw new CustomError(`Invalid key user schema not in \'${key}\' !`,400)
        }
        if(key  == 'age' && isNaN(+data.age)) {
            throw new CustomError("Invalid age non type Number !",400);
        }
        
        if(key == 'username' && (data.username.length < 3 || 
            !/^[A-za_z0-9_]+$/.test(data.username))) {
                throw new CustomError("Invalid username ",400);
            }
        
        if(key == 'email' && 
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            .test(data[key])){
                throw new CustomError("Invalid email !",400)
            } 
    }
}

export default class UserService {
    constructor() {}

    async getAll () {
        const users = await User_Module_.find().populate("posts");
        return users;
    }
    async get_user_and_Post (id) {
        if(!isValidId(id)) throw new CustomError("Invalid id ",400)
        const user = await User_Module_.findById({_id:id}).populate("posts");
        return user;
    }
    async getByQuery (query) {
        const users = await User_Module_.find(query);
        return users;
    }
    async getById(id) {
        if(!isValidId(id)) throw new CustomError("Invalid id ",400)
        const user = await User_Module_.findById({_id:id});
        return user;
    }
    async createItem(data) {
        await isvalidData(data)
        data.age = parseInt(data.age)
        const result = await new User_Module_.create(data)
        return result;
    }
    async deleteItem(id) {
        if(!isValidId(id)) throw new CustomError("Invalid id ",400)
        
        const posts = await Posts_Modules_.find({user_id:id})
        const user = await User_Module_.findById(id)

        if(posts) throw new CustomError({
                message:"Delete user not acceptly",
                data:{
                    user,
                    posts
                }
            },406)
        const result = await User_Module_.findByIdAndDelete({_id:id})
        
        if(!result) throw new CustomError("User not found ! ",404)
        return result;            
    }
    async updateItem(data, id) {
        if(!isValidId(id)) throw new CustomError("Invalid id ",400)
        await isValidUpdated_data(data)
        const result = await User_Module_.findByIdAndUpdate({_id:id},data)
        const newData = await User_Module_.findById(id)
        if(!result) throw new CustomError("User not found ! ",404)
        return {
            oldData:result,
            newData
        };    
    }
}

