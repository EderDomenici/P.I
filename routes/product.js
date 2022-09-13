const productController = require('../controllers/productController')
const express = require('express');
const { route } = require('./customer');
const router = express.Router();

router.get('/', productController.index)
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

