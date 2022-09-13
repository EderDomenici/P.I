
const { json } = require('sequelize');
const sequelize = require('sequelize');
const models = require('../models')
const Brand = models.Brand


module.exports ={
    async index(req,res ){
        const results =  await Brand.findAll();


    },

    async create(req,res){
        const {brandName} = req.body

        await Brand.create({brandName})

        return res.status(201).send();



    },

    async update(req,res){
        const {id} = req.params

        const {brandName} = req.body

        await Brand.update({brandName},{where: {id}})

        return res.status(201).send();

    },

    async delete(req,res){
        const {id} = req.params;

        await Brand.destroy({where:{id}})

        return res.status(201).send();

    }
}