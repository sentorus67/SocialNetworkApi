const router = require('express').Router();

const {
    createThoughts,
    getAllThoughts,
    getOneThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require ('../../controllers/thoughtsControllers');

router.route('/').get(getAllThoughts).post(createThoughts);

router.route('/:thoughtsId').get(getOneThought).put(updateThought).delete(deleteThought).post(addReaction);

router.route('/:thoughtsId/:reactionId').delete(removeReaction);

module.exports = router;