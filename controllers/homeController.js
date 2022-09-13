const models = require('../models');

const Product = models.Product;

module.exports = {
    async getHome(req, res){
        const prod =  await Product.findAll();
        
        return res.render('home',{prod})

    }
}