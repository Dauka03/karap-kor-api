import user from "./user.js"
import UserService from "./UserService.js"

class UserController{
    async create(req, res){
            try{
                const {
                    age,
                    creatted_date,
                    updatted_date,
                    stack_technology,
                    salary,
                    company_name,
                    job_title} = req.body
                    const user_data = await UserService.create(req.body)
                    res.json(user_data)
            }
            catch(e){
                res.status(500).json(e)
            }
    }
    async getAll(req,res){
        try{
            const users_data = await UserService.getAll();
            return res.json(users_data);
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try{
            const user_data = await UserService.getOne(req.params.id);
            return res.json(user_data)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const updatedData = await UserService.update(req.body)
            return res.json(updatedData)
        }
        catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const user_data = await UserService.delete(req.params.id);
            return res.json(user_data)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
}

export default new UserController()