import user from "./user.js";

class UserService{
    async create(user){
        
                const creattedUserData = await user.create(user)
                return creattedUserData
}
async getAll(){
        const usersData = await user.find();
        return usersData;
}
async getOne(id){
        if(!id){
            throw new Error('ID dont found')
        }
        const userData = await user.findById(id);
        return userData 
}
async update(user){
        if(!user_data._id) {
            throw new Error('ID dont found')
        } 
        const updatedData = await user.findByIdAndUpdate(user_data._id,user_data,{new: true})
        return updatedData
}
async delete(){
        if(!id){
            throw new Error('ID dont found')
        }
        const userData = await user.findByIdAndRemove(id);
        return userData
}
}

export default new UserService();