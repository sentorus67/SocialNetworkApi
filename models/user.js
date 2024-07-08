const { Schema, model } = require('mongoose');



const userSchema = new Schema(
    {
        username:
        {
        type: String,
        unique:true,
        required: true,
        },
        email: 
        {
        type: String,
        unique:true,
        required: true,
        match: ['.com']
        },

        thoughts: [Thoughtmodel],

        friends: [Usermodel],
    },
    {
        toJSON:
        {
           virtuals:true, 
        },
        id:false,
    }
);

thoughtSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});



const Users= model('user',userSchema);

module.exports= Users;