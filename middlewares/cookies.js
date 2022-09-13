// um arquivo que salva informações não sensiveis do lado do cliente.
//Mesmo fechando, ele pode continuar permanecendo. o tempo de usabilidade dos cookies, são feitos pelo programador. maxAge

// npm install cookie-parser  provavel que vai estar instalado já


//para manter logado. // fazer um input no html para o manter logado

//ir para o login controller

if(logado != undefined){
    res.cookie('nome da chave', 'valor que eu quer salvar. como o email e senha, ou só um', {maxAge:600000})
}

//para ver se funcionou, ir no inspecionar, depois para o storage, e depois cookies eo localhost.

//middleware de cookies

const fs = require('fs')
const path =require('path')

const cookieLogin = (req, res, next)=>{
    if(req.cookies.logado != undefined && req.session.usuario == null){
        const email = req.cookies.logado;
        const usuario = JSON.parse(fs.readFileSync(path.join(usuarios.JSON), {encoding: 'utf-8'}))

        //if(usuario.email == email){
          //  req.session;usuario = usuario
        // } se tiver só um

        usuario.forEach(valor => {
            if(valor.email == email){
                req.session.usuario = usuario
            }

        });

        next();
    }

}

    module.exports = cookieLogin

    //ir para o app e fazer a importação do middleware
    //requerer o cookieMiddleware


