const {Schema} =require('mongoose');



const reactionSchema= new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            ref: 'reactions',
            default: new Schema.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required:true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            ///getter method to reformat
        },
    }
)