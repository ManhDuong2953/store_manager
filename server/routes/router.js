import express from 'express';
const router = express.Router();

import AdminRouter from './Adminstrator/Admin/admin.router';
import UserRouter from './Login/user.router';
import EmployeeRouter from './Adminstrator/Employee/employee.router';
import LoginRouter from './Login/login.router';


const RouterMains = (app) => {
    app.use('/login', LoginRouter(router))
    app.use('/employee', EmployeeRouter(router))
    return app
}

export default RouterMains;