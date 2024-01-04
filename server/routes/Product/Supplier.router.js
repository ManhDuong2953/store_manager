import { Router } from "express";
import { deleteSupplierById, getAllSupplier, getSupplierById, getSupplierByKeyword, postSupplier, updateSupplierById } from "../../src/controllers/products/supplier.controller";

const SupplierRouter = (router = Router()) => {
    router.get('/all', getAllSupplier);
    router.get('/:id', getSupplierById);
    router.get('/search/:keyword', getSupplierByKeyword);
    router.post('/add', postSupplier);
    router.patch('/update/:id', updateSupplierById);
    router.delete('/delete/:id', deleteSupplierById);
    return router;
  };
  
  export default SupplierRouter;