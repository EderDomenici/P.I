const sequelize = require('sequelize');
const models = require('../models')
const ShippmentStatus = models.ShippmentStatus


module.exports ={
    async index(req,res ){
        const results =  await ShippmentStatus.findAll();


        return res.json(results)
    },

    async create(req,res){

    },

    async update(req,res){

    },

    async delete(req,res){
        
    }
}