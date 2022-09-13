const customerController = require('../controllers/customerController')
const express = require('express');
const auth = require('../middlewares/auth')
// const validacoes = require('../middlewares/expressValidator')
const router = express.Router();

router.get('/',customerController.getlogin)
router.get('/login/:id',customerController.showCustomer)
router.post('/', customerController.login)

router.get('/new',customerController.getRegister)
router.post('/new',customerController.create)

router.put('/login/:id',customerController.update)
router.delete('/login/:id',customerController.delete)



module.exports = router;