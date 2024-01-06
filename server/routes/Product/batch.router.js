import { Router } from "express";
import { deleteBatchById, getAllBatches, getBatchById, getBatchesByKeyword, postBatch, updateBatchById } from "../../src/controllers/Product/batch.controller";

const BatchRouter = (router = Router()) => {
    router.get('/all', getAllBatches);
    router.get('/:id', getBatchById);
    router.get('/search/:keyword', getBatchesByKeyword);
    router.post('/add', postBatch);
    router.patch('/update/:id', updateBatchById);
    router.delete('/delete/:id', deleteBatchById);
    return router;
  };
  
  export default BatchRouter;