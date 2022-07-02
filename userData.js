import mongoose from "mongoose";

const UserData = new mongoose.Schema({
    age: {type: Number, required: true},
    creatted_date: {type: Date},
    updatted_date: {type:Date, default: Date.now},
    stack_technology: [String],
    salary: {type: Number},
    company_name: {type: String},
    job_title: {type: String},
    verified: {type:Boolean, default: false}
})

export default mongoose.model("UserData", UserData)