const { body } = require("express-validator")

module.exports = {

    login:[
       body('email').isEmail().notEmpty(),
       body('password').notEmpty().isLength({min:6})],
    create:[
        body('email').isEmail().notEmpty(),
        body('password').isString.notEmpty().isLength({min:6}),
        body('cpf').isNumeric().notEmpty().isLength({min:11},{max:11})
    ]

}

// depois disso colocar na rota onde queremos usar.

// para validar de um tipo
//tem duas partes, uma na parte que fica nas rotas para validação e a outra que fica no controller

// na rota, não esquecer de colocar upload.single('img')

//não esquecer de mudar o código do jean para file e não texto e ao inves de colocar o input, colocar um select nas marcas

