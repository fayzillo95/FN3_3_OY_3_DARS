import UserService from "../services/User.Service_.js";

export default class UserController {
    constructor() {
        this.servise =  new UserService()
    }
    async getUsers(req, res, next ) {
        try {
            if(req.query) {
                const data = await this.servise.getByQuery(req.query)
                return res.status(200).json({
                    message:"User read complieted ",
                    success:true,
                    data
                })
            }
            const data = await this.servise.getAll()
            
            return res.status(200).json({
                message:"User read complieted ",
                success:true,
                data
            })
            
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            const data = this.servise.getById(req.params.id);
            return res.status(200).json({
                message:"User read complieted ",
                success:true,
                data
            });
        } catch (error) {
            next(error)
        }
    }
    async creteUser (req, res, next) {
        try {
            const data = this.servise.getById(req.params.id);
            return res.status(201).json({
                message:"User created complieted ",
                success:true,
                data
            });
        } catch (error) {
            next(error)
        }
    }
    async updateUser (req, res, next) {
        try{
            const data = await this.servise.updateItem(req.nody, req.params.id)
            return res.status(201).json({
                message:"User updated complieted ",
                success:true,
                data
            });
        } catch (error) {
            next(error)
        }
    }
    async deleteUser (req, res, next) {
        try {
            const data = await this.servise.deleteItem(req.params.id);
            return res.status(201).json({
                message:"User deleted complieted ",
                success:true,
                data
            });            
        } catch (error) {
            next(error)
        }
    }
}