var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController');

router.get('/all', productController.getAllProducts);

router.post('/save', productController.saveProduct);

router.get('/find/:id',productController.getProduct);

module.exports = router;
