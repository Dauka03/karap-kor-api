import CompanyService from "./CompanyService.js"

class CompanyController{
    async create(req, res){
            try{
                
                    const company = await CompanyService.create(req.body)
                    res.json(company)
            }
            catch(e){
                res.status(500).json(e)
            }
    }
    async getAll(req,res){
        try{
            const company = await CompanyService.getAll();
            return res.json(company);
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try{
            const company = await CompanyService.getOne(req.params.id);
            return res.json(company)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const updatedCompany = await CompanyService.update(req.body)
            return res.json(updatedCompany)
        }
        catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const company = await CompanyService.delete(req.params.id);
            return res.json(company)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    
}

export default new CompanyController()