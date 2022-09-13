var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Pagina Products Funcionando');
  res.render('registerProducts.ejs', {title: "Cadastro"})
// 1ca31735322e3959a3731718df0e339d4bce9526
});

module.exports = router;