const router = require('express').Router();

const {
    createUsers,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
} = require ('../../controllers/userControllers');

router.route('/').get(getAllUsers);

module.exports = router;