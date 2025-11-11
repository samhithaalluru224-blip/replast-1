import express from 'express';
import { upload } from '../configs/multer.js';
import authSeller from '../middlewares/authSeller.js';
import { addProduct, changeStock, ProductById, ProductList } from '../controllers/productController.js';

const productRouter = express.Router();

// Add product (only sellers)
productRouter.post('/add', authSeller, upload.array('images'), addProduct);

// Get all products
productRouter.get('/list', ProductList);

// Get single product by ID
productRouter.get('/:id', ProductById);

// Change stock status (only sellers)
productRouter.post('/stock', authSeller, changeStock);

export default productRouter;
