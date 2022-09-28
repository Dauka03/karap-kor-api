import mongoose from "mongoose";

const Company = new mongoose.Schema({
    company_name: {type: String, required: true},
    users_data: {type: Object, required: true}
})

export default mongoose.model("Company", Company)