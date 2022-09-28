import userData from "./models/userData.js";
class UserService{
    async create(User){
        const {
                age,
                creatted_date,
                updatted_date,
                stack_technology,
                salary,
                company_name,
                level_name,
                tag,work_arrangement,years_experience_company,years_experience_total} = User
        const creattedUserData = await userData.create({age,
                creatted_date,
                updatted_date,
                stack_technology,
                salary,
                company_name,
                level_name,
                tag,work_arrangement,years_experience_company,years_experience_total})
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
async verify(id){
        if(!id){
                throw new Error('ID dont found')  
        }
        const data = await userData.findByIdAndUpdate(id)
        return data;
}
}

export default new UserService();