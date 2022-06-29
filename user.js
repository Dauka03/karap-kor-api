import mongoose from "mongoose";

const User = new mongoose.Schema({
    age: {type: Number},
    creattesd_date: {type: Date},
    updatted_date: {type:Date, default: Date.now},
    stack_technology: [String],
    salary: {type: Number},
    company_name: {type: String},
    job_title: {type: String},
    verified: {type:Boolean, default: false}
})

export default mongoose.model("User", User)