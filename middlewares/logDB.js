//mexer na rota para os middlewares por rota

//middlewares para o banco de dados

const fs= require('fs')

function logDB(req, res, next){
    fs.appendFileSync('logDB.text', 'registro da url acessada: ' + req.url)
    next();
}

module.exports = logDB

//ir na rota para que eu quero

// importar o logDB e colocar no meio da rota. é entre a a rota e o controler colocar o nome da função
// so não esquecer do multer

// na rota colocar a const

const storage = multer.diskStorage({
    destination: function (res, res, next){
        cb(null, path.join('uploads'))
    },
    filename: function (req, res, next){
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

// na rota não esqiecer de colocar o apload.any(), depois da rota e antes do middleware.