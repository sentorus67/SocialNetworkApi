const {Schema, model} =require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText:
        {
            type: String,
            required: true,
            maxLength: 280,
        },
        username:
        {
            type: String,
            required: true,
        },
        reaction:  [reactionSchema],
        createdAt:
        {
            type: Date,
            default: Date.now,
        },
        
    },
    {
        toJSON:
        {
        virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactioncount').get(function(){
    return this.reaction.length;
})

const Thoughts = model('thoughts',thoughtSchema);

module.exports= Thoughts;