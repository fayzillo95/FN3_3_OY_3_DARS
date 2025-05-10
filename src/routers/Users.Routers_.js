import {Router} from "express";
import UserController from "../controllers/User.Controller_.js";

const controller = new UserController()
const userRouter = Router()
userRouter.get('',controller.getUsers.bind(controller))
          .get('/:id',controller.getById.bind(controller))
          .get('/post/:id',controller.getUserByid_and_post.bind(controller))
          .post('/',controller.creteUser.bind(controller))
          .put('/:id',controller.updateUser.bind(controller))
          .delete('/:id',controller.deleteUser.bind(controller))
            
export default userRouter
