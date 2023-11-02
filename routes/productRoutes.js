const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController.js');

router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);

router.post('/products', ProductController.createProduct);
router.delete('/products/:id', ProductController.deleteProduct);
router.put('/products/:id', ProductController.updateProduct);

module.exports = router;