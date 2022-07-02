import userData from "./userData.js";
import Account from "./Account.js";
class UserService{
    async create(User){
        const {
                age,
                creatted_date,
                updatted_date,
                stack_technology,
                salary,
                company_name,
                job_title} = User
        const creattedUserData = await userData.create({age,
                creatted_date,
                updatted_date,
                stack_technology,
                salary,
                company_name,
                job_title})
        return creattedUserData
} 
async getAll(){
        const data = await userData.find();
        return data;
}
async getOne(id){
        if(!id){
            throw new Error('ID dont found')
        }
        const data = await userData.findById(id);
        return data 
}
async update(User){
        if(!User._id) {
            throw new Error('ID dont found')
        } 
        const updatedData = await userData.findByIdAndUpdate(User._id,User,{new: true})
        return updatedData
}
async delete(id){
        if(!id){
            throw new Error('ID dont found')
        }
        const data = await userData.findByIdAndRemove(id);
        return data
}
}

export default new UserService();