import { Router } from "express";
import authController from '.././authController.js'
import { check } from "express-validator";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
 
const router = new Router();

router.post('/registration',[
    check('username', 'Username can not be empty.').notEmpty(),
    check('password', 'Password must be greater than 4 and less than 10 .').isLength({min:4, max:10})
],authController.registration)
router.post('/login', authController.login)
router.get('/users',roleMiddleware(['ADMIN']), authController.getUsers)

export default router