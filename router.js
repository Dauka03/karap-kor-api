import { Router } from "express";
import UserDataController from "./UserDataController.js";
const router = new Router();

router.post('/usersdata', UserDataController.create)
router.get('/usersdata', UserDataController.getAll)
router.get('/usersdata/:id', UserDataController.getOne)
router.put('/usersdata',UserDataController.update)
router.delete('/usersdata/:id',UserDataController.delete)
export default router;