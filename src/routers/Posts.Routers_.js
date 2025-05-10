import {Router} from "express";
import PostsController from "../controllers/Post.Controler_.js";

const controller = new PostsController()
const postsRouter = Router()

postsRouter.get('/',controller.getAll.bind(controller))
           .get('/:id',controller.getById.bind(controller)) 
           .post('/',controller.createPost.bind(controller))
           .put('/',controller.updatePost.bind(controller))
           .delete('/',controller.deletePost.bind(controller))
           
export default postsRouter