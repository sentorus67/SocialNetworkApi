const router = require('express').Router();

const {
    createUsers,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require ('../../controllers/userControllers');

router.route('/').get(getAllUsers).post(createUsers);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;