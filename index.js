import  express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const port = 5000;
const DB_URL = `mongodb+srv://kara:mHHSizzBSaZwFmBe@cluster0.mmzmfn2.mongodb.net/?retryWrites=true&w=majority`
const app = express();

app.use(express.json())
app.use('/api',router)

async function startApp(){
    try{
        mongoose.connect(DB_URL,{useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(port, () => console.log("Server started on port" + port))

    }
    catch(e){
        console.log(e);
    }
}

startApp()
