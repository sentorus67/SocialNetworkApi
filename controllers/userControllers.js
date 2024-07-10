const {Users,Thoughts, Reaction} = require('../models');

module.exports ={
    async createUsers(req,res){
        try{
            const newUser=await Users.create(req.body);
            res.json(newUser);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async getAllUsers(req,res)
    {
        try{
            const allUsers= await Users.find();
            res.json(allUsers)
        } catch(err){
            res.status(500).json(err);
        }
    },  
    async getOneUser(req,res)
    {
        try{
            const oneUser= await Users.findOne({_id: req.params.userId})
            //const oneUser= await Users.find({username: new RegExp(req.params.userId,'i')},function(err,docs){cb(docs);})

            res.json(oneUser)
        } catch(err){
            res.status(500).json(err);
        }
    },  
    async updateUser(req,res)
    {
        try{
            const previousName= await Users.findOne({_id:req.params.userId});
            const userUpdate= await Users.findOneAndUpdate({_id: req.params.userId},
            {$set: req.body},
            {new: true});
            const thoughtupdater= await Thoughts.updateMany({username: previousName.username},{$set: req.body});
            res.json(previousName.thoughts.username);
        } catch(err){
            res.status(500).json(err);
        }
    },  
    async deleteUser(req,res)
    {
        try{
            const userDelete= await Users.findOneAndDelete({_id: req.params.userId});
            res.json('the user has been deleted');
        } catch(err){
            res.status(500).json(err);
        }
    },
    async addFriend(req,res){
        try{
            const addFriend= await Users.findOneAndUpdate({_id: req.params.userId},{$addToSet: {friends: req.params.friendId }});
            res.json('friend added!');
        }
        catch(err){
        res.status(500).json(err);
        }
    },
    async removeFriend(req,res){
        try{
            const removeFriend=await Users.findOneAndUpdate({_id: req.params.userId},{$pull:{friends: req.params.friendId} });
            res.json('friend removed')
        }
        catch(err){
        res.status(500).json(err);
        }
    }
}