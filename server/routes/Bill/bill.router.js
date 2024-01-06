import { Router } from 'express';
import {
    getAllBillIns,
    getBillInById,
    postBillIn,
    updateBillInById,
    deleteBillInById,


    getAllBillOuts,
    getBillOutById,
    postBillOut,
    updateBillOutById,
    deleteBillOutById,
} from '../../src/controllers/Bill/bill.controller';


const BillRouter = (router = Router()) => {
    router.get('/billin/all', getAllBillIns);
    router.get('/billin/:id', getBillInById);
    router.post('/billin/add', postBillIn);
    router.patch('/billin/update/:id', updateBillInById);
    router.delete('/billin/delete/:id', deleteBillInById);

    router.get('/billout/all', getAllBillOuts);
    router.get('/billout/:id', getBillOutById);
    router.post('/billout/add', postBillOut);
    router.patch('/billout/update/:id', updateBillOutById);
    router.delete('/billout/delete/:id', deleteBillOutById);

    return router;
};

export default BillRouter;
