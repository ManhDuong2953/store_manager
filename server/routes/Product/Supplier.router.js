import { Router } from "express";
import { deleteSupplierById, getAllSupplier, getSupplierById, getSupplierByKeyword, postSupplier, updateSupplierById } from "../../src/controllers/Product/supplier.controller";
import { addMedia, checkMissingInputs } from "../../middlewares";
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });
const SupplierRouter = (router = Router()) => {
  router.get('/all', getAllSupplier);
  router.get('/:id', getSupplierById);
  router.get('/search/:keyword', getSupplierByKeyword);
  router.post('/add', upload.single('linkMedia'), addMedia, postSupplier);
  router.patch('/update/:id', upload.single('linkMedia'), addMedia, updateSupplierById);
  router.delete('/delete/:id', deleteSupplierById);
  return router;
};

export default SupplierRouter;
