import { Router } from "express";
import { deleteProductById, getAllProducts, getProductById, getProductByKeyword, postProduct, updateProductById } from "../../src/controllers/products/product.controller";

const ProductRouter = (router = Router()) => {
    router.get('/all', getAllProducts);
    router.get('/:id', getProductById);
    router.get('/search/:keyword', getProductByKeyword);
    router.post('/add', postProduct);
    router.patch('/update/:id', updateProductById);
    router.delete('/delete/:id', deleteProductById);
    return router;
  };
  
  export default ProductRouter;