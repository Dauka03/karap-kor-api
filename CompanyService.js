import company from "./models/company.js";
class CompanyService{
    async create(Company){
        const {
                company_name,
                users_data} = Company
        const creattedCompany = await company.create({
                company_name,
                users_data
                })
        return creattedCompany
} 
async getAll(){
        const data = await company.find();
        return data;
}
async getOne(id){
        if(!id){
            throw new Error('ID dont found')
        }
        const data = await company.findById(id);
        return data 
}
async update(Company){
        if(!Company._id) {
            throw new Error('ID dont found')
        }
        const updatedCompany = await company.findByIdAndUpdate(Company._id,Company,{new: true})
        return updatedCompany
}
async delete(id){
        if(!id){
            throw new Error('ID dont found')
        }
        const data = await company.findByIdAndRemove(id);
        return data
}
}

export default new CompanyService();