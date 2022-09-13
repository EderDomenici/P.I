const sequelize = require('sequelize');
const models = require('../models')
const Order = models.Order

module.exports ={
    async index(req,res ){
        const results =  await Order.findAll();


        return res.json(results)

    },

    async create(req,res){

    },

    async update(req,res){

    },

    async delete(req,res){

    }
}