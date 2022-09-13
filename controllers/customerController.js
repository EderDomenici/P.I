const { json } = require('sequelize');
const sequelize = require('sequelize');

const bcrypt = require('bcrypt')
// const { validationResult } = require('express-validator');
const models = require('../models');
const { emit } = require('process');
const { render } = require('../app');
const Customer = models.Customer;


module.exports ={

    async getlogin(req,res ){
        return res.render('login')
    },

    async getRegister(req,res){
        res.render('cadastro')
    },

    async showCustomer(req,res){
        const {id} = req.params

        const user = await Customer.findByPk(id)

        return res.render('profile', {user})

    },

    async login(req,res){

        const {email,password} = req.body

         const user = await Customer.findOne({attributes: ['id','email', 'password', 'admin'],
              where: {
                email
              }
             })
             console.log(user)
             if(user === null){
                return res.status(400).send("Login ou Senha invalido")
             }else{
                const comparepass = await bcrypt.compare(password, user.password)
                if(user.email === email && comparepass === true){
                    console.log(user)
                    if(user.dataValues.admin === 1){
                        res.redirect('/adm/product')
                    }else{
                            res.redirect(`/customer/login/${user.id}`)
                    }
                }else{
                    if(!comparepass){
                        res.status(400).send("Login ou senha invalido")
                    }
                }
             }






    },

    async create(req,res){
        const {
            name,
            lastName,
            cpf,
            email,
            password,
            birthDay,
            phone,
            cep,
            address,
            complementary,
            referencePoint,
            neighborhood,
            city,
            state} = req.body


        const encrypted = bcrypt.hashSync(password, 10)

            console.log(password)
        if(!name || !lastName || !email || !password || !phone || !birthDay|| !cpf || !address || !neighborhood || !city || !state || !cep){

            return res.status(400).send("Preencha os dados")
        }else{

             await Customer.create({
                name,
                lastName,
                cpf,
                email,
                password:encrypted,
                birthDay,
                phone,
                cep,
                address,
                complementary,
                referencePoint,
                neighborhood,
                city,
                state})

                console.log(password)

                res.status(201)

                const user = await Customer.findOne({attributes:['id','email'],
                where:{
                    email
                }
                })


                res.redirect(`/customer/login/${user.id}`)

        }


    },

    async update(req,res){
        const {id} = req.params;

        const {
            name,
            lastName,
            email,
            password,
            phone,
            birthDay,
            cpf,
            address,
            complementary,
            neighborhood,
            city,
            state,
            cep,
            referencePoint} = req.body

        await Customer.update({
            name,
            lastName,
            email,
            password,
            phone,
            birthDay,
            cpf,
            address,
            complementary,
            neighborhood,
            city,
            state,
            cep,
            referencePoint},
        {
            where: {id}
        })

        return res.status(201).send();

    },

    async delete(req,res){

        const {id} = req.params;

        await Customer.destroy({where:{id}})

        return res.status(201).send();
    }
}