const sequelize = require('sequelize');
const models = require('../models');
const { index, update } = require('./customerController');
const CreditCard = models.CreditCard

module.exports ={
    async index(req,res ){
        const results =  await CreditCard.findAll();


        return res.json(results)

    },

    async create(req,res){
        const{
            numberCard,
            expDate,
            cvv,
            nameCard,
            cpf,
            customerId} = req.body

        await CreditCard.create({
            numberCard,
            expDate,
            cvv,
            nameCard,
            cpf,
            customerId
        });

        return res.status(201).send();

    },

    async update(req,res){

    },

    async delete(req,res){
        const {id} = req.params;

        await CreditCard.destroy({where:{id}})

        return res.status(201).send();
    }
}