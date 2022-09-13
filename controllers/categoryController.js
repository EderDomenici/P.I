const sequelize = require('sequelize');
const models = require('../models')
const Category = models.Category


module.exports ={
    async index(req,res ){
        const results =  await Category.findAll();


        return res.json(results)
    },

    async create(req,res){
        const {name} = req.body

        await Category.create({name})

        return res.status(201).send();

    },

    async update(req,res){
        const {id} = req.params

        const {name} = req.body

        await Category.update({name},{where: {id}})

        return res.status(201).send();

    },

    async delete(req,res){
        const {id} = req.params

        await Category.destroy({where: {id}})

        return res.status(201).send();
    }
}