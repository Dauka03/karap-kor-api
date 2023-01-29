import  express from "express";
import mongoose from "mongoose";
import router from "./router/router.js";
import authRouter from "./router/authRouter.js"
import cors from "cors";
const port = 5000;
const DB_URL = `mongodb+srv://kara:mHHSizzBSaZwFmBe@cluster0.mmzmfn2.mongodb.net/test`
const app = express();

app.use(cors())
app.use(express.json())
app.use('/api',router)
app.use('/auth',authRouter)

async function startApp(){
    try{
        mongoose.connect(DB_URL,{useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(process.env.PORT || 5000)

    }
    catch(e){
        console.log(e);
    }
}

startApp()
