import mongoose from "mongoose";

const UserData = new mongoose.Schema({
    age: {type: Number, required: true},
    creatted_date: {type: Date},
    updatted_date: {type:Date, default: Date.now},
    stack_technology: [String],
    salary: {type: Number},
    company_name: {type: String},
    level_name: {type: String},
    verified: {type:Boolean, default: false},
    tag: {type: String},
    work_arrangement: {type: String, default:'Office'},
    years_experience_company: {type: Number, default:0},
    years_experience_total: {type: Number, default: 0}

})

export default mongoose.model("UserData", UserData)