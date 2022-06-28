import user from "./user.js"

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
                    const user_data = await user.create(
                    {   
                        age,
                        creatted_date,
                        updatted_date,
                        stack_technology,
                        salary,
                        company_name,
                        job_title
                    })
                    res.json(user_data)
            }
            catch(e){
                res.status(500).json(e)
            }
    }
    async getAll(req,res){
        try{
            const users_data = await user.find();
            return res.json(users_data);
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try{
            const {id} = req.params;
            if(!id){
                res.status(400).json({message: "id dont found"})
            }
            const user_data = await user.findById(id);
            return res.json(user_data)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const user_data = req.body
            if(!user_data._id) {
                res.status(400).json({message: "id dont found"})
            } 
            const updatedData = await user.findByIdAndUpdate(user_data._id,user_data,{new: true})
            return res.json(updatedData)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message: "id dont found"})
            }
            const user_data = await user.findByIdAndRemove(id);
            return res.json(user_data)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
}

export default new UserController()