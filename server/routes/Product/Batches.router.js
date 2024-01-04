import { Router } from "express";

const BatchRouter = (router = Router()) => {
    router.get('/all', getAllSuppliers);
    router.get('/:id', getSupplierById);
    router.get('/search/:keyword', getSupplierByKeyword);
    router.post('/add', postSupplier);
    router.patch('/update/:id', updateSupplierById);
    router.delete('/delete/:id', deleteSupplierById);
    return router;
  };
  
  export default BatchRouter;