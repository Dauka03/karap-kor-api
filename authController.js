import User from './models/User.js'
import Role from './models/Role.js'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator';
import jwt  from 'jsonwebtoken';
import config from './config.js';

const {secret} = config
const generateAccessToken = (id, roles)=>{
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload,secret, {expiresIn: "24h"})
}
class authController{
    async registration(req, res){
        try { 
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Registration error", errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate){
                return res.status(400).json({message: `A user with the same username already exists`})
            }
            const hashpassword = bcrypt.hashSync(password,7);
            const userRole = await Role.findOne({value:"USER"})
            const user = new User({username, password: hashpassword, roles:[userRole.value]})
            await user.save()
            return res.json({message:"User succsefully registered"})
        } catch (error) {
            console.log(error);
            res.status(400).json({message:`Registation error`})
        }
    }
    async login(req, res){
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message:`User ${user} don't found.`})
            } 
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({message:`Password is not correct`})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})

        } catch (error) {
            console.log(error);
            res.status(400).json({message:`Login error`})
        }
    }
    async getUsers(req,res){
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            console.log(error);
        }
    }
}

export default new authController()