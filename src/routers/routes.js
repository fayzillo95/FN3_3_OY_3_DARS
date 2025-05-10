import postsRouter from "./Posts.Routers_.js";
import userRouter from "./Users.Routers_.js";

export default [
    {url:'/api/users', funk : userRouter},
    {url:"/api/posts", funk : postsRouter}
]