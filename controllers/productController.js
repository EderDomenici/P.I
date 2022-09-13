const sequelize = require('sequelize');
const models = require('../models');
const Product = models.Product


module.exports ={
    async admproducts(req,res ){
        const prod =  await Product.findAll();

        return res.render('registerProduct',{prod})


    },

    async getSales(req,res){
        return res.render('salesPanel')

    },

    async create(req,res){
        const {
            name,
            price,
            weight,
            categoryId,
            size,
            brandID,
            model,
            amount,
            description,
            color,
            follow
            } = req.body


            await Product.create({name,price,weight,categoryId,size,brandID,model,amount,description,color,follow})

            res.redirect('/adm/product')
    },

    async update(req,res){
        const {id} = req.params;

        const {
            name,
            price,
            weight,
            categoryId,
            brandID,
            specificationId,
            amount} = req.body

           await Product.update({
            name,
            price,
            weight,
            categoryId,
            brandID,
            specificationId,
            amount

            },{where:{id}});

    },

    async delete(req,res){
        const {id} = req.params

        await Product.destroy({where:{id}});

        res.redirect('/adm/product')

    }
}