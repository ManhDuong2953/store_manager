import express from 'express';
const router = express.Router();

import EmployeeRouter from './Adminstrator/Employee/Employee.router';
import LoginRouter from './Login/login.router';

import { Authorization, Role } from '../middlewares/Authorization';
import { Authentication } from '../middlewares/Authentication';
import { checkMissingInputs } from '../middlewares';
import ProductRouter from './Product/Product.router';
import SupplierRouter from './Product/Supplier.router';
require('dotenv').config();

// const ROLEADMIN = process.env.ROLEADMIN.split(',');
// const ROLEEMPLOYEE = process.env.ROLEEMPLOYEE.split(',');

const RouterMains = (app) => {
    //login
    app.use('/auth', LoginRouter(router))
    //employee
    app.use('/employee', checkMissingInputs, Authentication, Authorization, EmployeeRouter(router));
    //product
    app.use('/supplier', checkMissingInputs, SupplierRouter(router));
    app.use('/batch', checkMissingInputs);
    app.use('/product', checkMissingInputs, ProductRouter(router));
    //bill
    app.use('/bill', checkMissingInputs);
    // order
    app.use('/order', checkMissingInputs);

    return app
}

export default RouterMains;