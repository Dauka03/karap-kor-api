import UserDataService from "./UserDataService.js"

class UserController{
    async create(req, res){
            try{
                    const user_data = await UserDataService.create(req.body)
                    res.json(user_data)
            }
            catch(e){
                res.status(500).json(e)
            }
    }
    async getAll(req,res){
        try{
            const users_data = await UserDataService.getAll();
            return res.json(users_data);
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try{
            const user_data = await UserDataService.getOne(req.params.id);
            return res.json(user_data)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const updatedData = await UserDataService.update(req.body)
            return res.json(updatedData)
        }
        catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const user_data = await UserDataService.delete(req.params.id);
            return res.json(user_data)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async verify(req,res){
        try {
            const user_data = await UserDataService.verify(req.params.id);
            return res.json(user_data)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController()