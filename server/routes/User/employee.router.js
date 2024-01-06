import { Router } from 'express';
import multer from 'multer';

import {
  getAllEmployee,
  getEmployeeById,
  getEmployeeByKeyword,
  updateEmployeeById,
  deleteEmployeeById,
  createEmployee
} from '../../src/controllers/User/employee.controller';

import { addMedia, checkMissingInputs } from '../../middlewares';
import { Authorization, Role } from '../../middlewares/authorization';
import { Authentication } from '../../middlewares/authentication';

const storage = multer.memoryStorage();
const upload = multer({ storage });

require('dotenv').config();

const ROLE_ADMIN = process.env.ROLEADMIN.split(',');
const ROLE_EMPLOYEE = process.env.ROLEEMPLOYEE.split(',');

const roleMiddleware = (roles) => (req, res, next) => Role(req, res, next, ...roles);

const EmployeeRouter = (router = Router()) => {
  router.get('/all', roleMiddleware(ROLE_EMPLOYEE), getAllEmployee);
  router.get('/:id', roleMiddleware(ROLE_EMPLOYEE), getEmployeeById);
  router.post('/register', roleMiddleware(ROLE_ADMIN), checkMissingInputs, createEmployee);
  router.get('/search/:keyword', roleMiddleware(ROLE_EMPLOYEE), getEmployeeByKeyword);
  router.patch('/update/:id', roleMiddleware(ROLE_ADMIN), upload.single('linkMedia'), addMedia, checkMissingInputs, updateEmployeeById);
  router.delete('/delete/:id', roleMiddleware(ROLE_ADMIN), checkMissingInputs, deleteEmployeeById);

  return router;
};

export default EmployeeRouter;
