
function auth(req, res, next){

if(typeof(req.session.customer) != 'undefined'){
    return  next()
}else{
    return res.send('Você precisa estar logado.')
}
}

module.exports = auth


// vai para as rotas de profile para que a pessoa consiga acessar a rota. pq queremos o usuário logado
