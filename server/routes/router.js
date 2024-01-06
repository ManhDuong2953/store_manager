import express from 'express';

import EmployeeRouter from './User/employee.router';
import LoginRouter from './Login/login.router';

import { Authorization, Role } from '../middlewares/authorization';
import { Authentication } from '../middlewares/authentication';
import { checkMissingInputs } from '../middlewares';

import ProductRouter from './Product/product.router';
import SupplierRouter from './Product/supplier.router';
import BatchRouter from './Product/batch.router';
import BillRouter from './Bill/bill.router';
require('dotenv').config();

// const ROLEADMIN = process.env.ROLEADMIN.split(',');
// const ROLEEMPLOYEE = process.env.ROLEEMPLOYEE.split(',');

const RouterMains = (app) => {
    //login
    app.use('/auth', LoginRouter(express.Router()));  // Note: Create a new instance here
    //employee
    app.use('/employee', checkMissingInputs, Authentication, Authorization, EmployeeRouter(express.Router()));  // Create a new instance
    //product
    app.use('/supplier', checkMissingInputs,SupplierRouter(express.Router()));  // Create a new instance
    app.use('/batch', checkMissingInputs, BatchRouter(express.Router()));  // Create a new instance
    app.use('/product', checkMissingInputs, ProductRouter(express.Router()));  // Create a new instance
    //bill
    app.use('/bill', checkMissingInputs, BillRouter(express.Router())); // Create a new instance
    // order
    app.use('/order', checkMissingInputs);

    return app;
}

export default RouterMains;
