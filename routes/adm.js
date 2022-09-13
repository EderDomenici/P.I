const express = require('express');
const router = express.Router();

//Controllers
const brandController = require('../controllers/brandController');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const { route } = require('./customer');


// router.get('/', function(req, res, next) {

// });

//Brand
router.get('/brand', brandController.index);
router.post('/brand', brandController.create);
router.put('/brand/:id', brandController.update);
router.delete('/brand/:id', brandController.delete);

//Category
router.get('/category', categoryController.index);
router.post('/category', categoryController.create);
router.put('/category/:id', categoryController.update);
router.delete('/category/:id', categoryController.delete);

//Product
router.get('/product', productController.admproducts)
router.post('/product', productController.create);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.delete);

router.get('/sales', productController.getSales)

module.exports = router;