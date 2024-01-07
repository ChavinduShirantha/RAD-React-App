var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController');

router.get('/all', productController.getAllProducts);

module.exports = router;
