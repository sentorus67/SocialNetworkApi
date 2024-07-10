const {Users,Thoughts, Reaction} = require('../models');

module.exports = {
    async createThoughts(req,res){
        try{
            const newThought=await Thoughts.create(req.body);
            const updateUser= await Users.findOneAndUpdate({username: req.body.username},{$addToSet:{thoughts: newThought}},{new: true});
            res.json(newThought);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async getAllThoughts(req,res){
        try{
            const allThoughts=await Thoughts.find();
            res.json(allThoughts);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async getOneThought(req,res){
        try{
            const oneThought= await Thoughts.findOne({_id: req.params.thoughtsId});
            res.json(oneThought);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async updateThought(req,res){
        try{
            const updatedThought= await Thoughts.findOneAndUpdate({_id: req.params.thoughtsId},{$set: req.body},{new: true});
            res.json(updatedThought);
        } catch(err){
            res.status(500).json(err);
        }
    },
    async deleteThought(req,res){
        try{
           // const oldthought= await Thoughts.findOne({_id: req.params.thoughtsId});
           console.log(req.params.thoughtsId);
            const deleteThought= await Thoughts.findOneAndDelete({_id: req.params.thoughtsId});
            console.log('deleting from thoughts. '+ deleteThought);
            const deleteFromUser= await Users.findOneAndUpdate({thoughts: req.params.thoughtsId},{$pull:{thoughts: req.params.thoughtsId}},{new:true});
            console.log('deleting from user. '+ deleteFromUser);
            res.json('Thought deleted');
        } catch(err){
            res.status(500).json(err);
        }
    },
    async addReaction(req,res){
        try{
            const newReaction= req.body;
            const updateThought= await Thoughts.findOneAndUpdate({_id: req.params.thoughtsId},{$addToSet: {reaction: newReaction}});
            res.json('attempted');
        }
        catch(err){
            console.log(err);
        res.status(500).json(err);
        }
    },
    async removeReaction(req,res){
        try{
        const updatedThought= await Thoughts.findOneAndUpdate({_id: req.params.thoughtsId},{$pull:{reaction: req.params.reactionId}},{new: true});
        res.json("reaction deleted");
        }
        catch(err){
          
        res.status(500).json(err);
        }
    }
}