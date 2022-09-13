const sequelize = require('sequelize');
const models = require('../models')
const Paymant = models.Paymant


module.exports ={
    async index(req,res ){
        const results =  await Paymant.findAll();


        return res.json(results)

    },

    async create(req,res){

    },

    async update(req,res){

    },

    async delete(req,res){
        
    }
}