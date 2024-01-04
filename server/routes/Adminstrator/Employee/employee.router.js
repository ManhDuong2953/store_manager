import { Router } from 'express';
import multer from 'multer';

import {
  getAllEmployee,
  getEmployeeById,
  getEmployeeByKeyword,
  updateEmployeeById,
  deleteEmployeeById
} from '../../../src/controllers/users/employee.controller';

import { createUser } from '../../../src/controllers/users/user.controller';
import { addMedia } from '../../../src/controllers/media/media.controller';
import { checkMissingInputs } from '../../../middlewares';
import { Authorization, Role } from '../../../middlewares/Authorization';
import { Authentication } from '../../../middlewares/Authentication';

const storage = multer.memoryStorage();
const upload = multer({ storage });

require('dotenv').config();

const ROLE_ADMIN = process.env.ROLEADMIN.split(',');
const ROLE_EMPLOYEE = process.env.ROLEEMPLOYEE.split(',');

const roleMiddleware = (roles) => (req, res, next) => Role(req, res, next, ...roles);

const EmployeeRouter = (router = Router()) => {
  router.get('/', roleMiddleware(ROLE_EMPLOYEE), getAllEmployee);
  router.get('/:id', roleMiddleware(ROLE_EMPLOYEE), getEmployeeById);
  router.post('/register', roleMiddleware(ROLE_ADMIN), checkMissingInputs, createUser);
  router.get('/search/:keyword', roleMiddleware(ROLE_EMPLOYEE), getEmployeeByKeyword);
  router.patch('/update/:id', roleMiddleware(ROLE_ADMIN), upload.single('mediaAdmin'), addMedia, checkMissingInputs, updateEmployeeById);
  router.delete('/delete/:id', roleMiddleware(ROLE_ADMIN), checkMissingInputs, deleteEmployeeById);

  return router;
};

export default EmployeeRouter;
