import { Router } from "express";
import UserDataController from "../UserDataController.js";
import CompanyController from "../CompanyController.js";
const router = new Router();

router.post('/usersdata', UserDataController.create)
router.get('/usersdata', UserDataController.getAll)
router.get('/usersdata/:id', UserDataController.getOne)
router.put('/usersdata',UserDataController.update)
router.delete('/usersdata/:id',UserDataController.delete)
router.put('/userdata/verify/:id', UserDataController.verify)

router.post('/company', CompanyController.create)
router.get('/company', CompanyController.getAll)
router.get('/company/:id', CompanyController.getOne)
router.put('/company',CompanyController.update)
router.delete('/company/:id',CompanyController.delete)

export default router;