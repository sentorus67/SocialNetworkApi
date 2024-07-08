const {Users,Thoughts} = require('../models');

module.exports ={
    async createUsers(req,res){
        try{

        } catch(err){
            res.status.json(err);
        }
    },
    async getAllUsers(req,res)
    {
        try{
            const allUsers= await Users.find();
            res.json(allUsers)
        } catch(err){
            res.status.json(err);
        }
    },  
    async getOneUser(req,res)
    {
        try{
            const oneUser= await Users.findOne({_id: req.params.userId})
            res.json(oneUser)
        } catch(err){
            res.status.json(err);
        }
    },  
    async updateUser(req,res)
    {
        try{

        } catch(err){
            res.status.json(err);
        }
    },  
    async deleteUser(req,res)
    {
        try{

        } catch(err){
            res.status.json(err);
        }
    },
}