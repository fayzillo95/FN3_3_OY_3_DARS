import PostsService from "../services/Posts.Service_.js";

export default class PostsController {
    constructor() {
        this.servise = new PostsService;
    }

    async getAll (req, res, next) {
        try {
            const data = this.servise.getAll()
            res.status(200).json({
                success:true,
                message:"Posts read complieted ",
                data
            })
        } catch (error) {
            next(error)            
        }
    }
    async getById (req, res, next) {
        try {
            const data = this.servise.getById(req.params.id)
            res.status(200).json({
                success:true,
                message:"Posts read complieted ",
                data
            })
        } catch (error) {
            next(error)            
        }
    }
    async createPost (req, res, next) {
        try {
            const data = this.servise.createItem(req.body)
            res.status(201).json({
                success:true,
                message:"Post created complieted ",
                data
            })
        } catch (error) {
            next(error)            
        }
    }
    async updatePost (req, res, next) {
        try {
            const data = this.servise.updateItem(req.body, req.params.id)
            res.status(200).json({
                success:true,
                message:"Posts updated complieted ",
                data
            })
        } catch (error) {
            next(error)            
        }
    }
    async deletePost (req, res, next) {
        try {
            const data = this.servise.deleteItem(req.params.id)
            res.status(200).json({
                success:true,
                message:"Post deleted complieted ",
                data
            })
        } catch (error) {
            next(error)            
        }
    }

}

