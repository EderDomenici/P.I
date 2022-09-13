//nivel global para a saber onde o url entrou

const fs= require('fs')
const path = require('path').basename('../txt')


function logSite(req, res, next){
fs.appendFileSync('log.txt', "\nO usuário entro na url:" + req.url)

    next();
}

module.exports = logSite


// app.js configuração da logSite



// tem que chamar o methodOverride('_method') para conseguir  fazer o put no html

//chamar o multer const multer = require ('multer') para aplicação por rotas
// o multer é para que as rotas sejam responsveis pelo upload de arquivos