// no controller 

const { validationResult } = require('express-validator');

// dentro do controler na função de envio. exemplo:

//no module.exports ->

//todas as validações que o express validator for fazer nas rotas, ele vai deixar disponivel na requisição.

module.exports ={

   storageUSer: (req, res) =>{
    const errors = validationResult(req)
     if(!errors.isEmpty()){
        //se o erro estiver preenchido, fazer algo
        //console.log(errors)

        return res.render('//rotaQueForUsar', { mensagensDeErro: errors.mapped() })
     }
}

}

//o .mapped() vai mapear todos os erros e entrega como um objeto de erros


//na view
//se o controller enviou variaveis locais e se dentro dessas variaveis, vem a variavel mensagemDeErro. Entao vamos interar sobre essa variavel
// <% if (locals && locals.mensagensDeErro) { %>
//     //se esquecer o if, pode ter um erro na renderização. vai enviar para ver se o post está correto
// <% for(let erro in mensagensDeErro) { %>
// <p> <$= mensagensDeErro[erro].msg%> </p> 
// <% } %>
// <% } %>

// <% if (errors !== undefined) { %>
// <ul>
// <% for (let error in errors){ %>
// <li>
// <% errors[error].msg %>

// </li>
// <% } %>

// </ul>
// <% } %>

//ver se a  o nome que está a msg

//salvo engano, a msg é por padrão do express validator