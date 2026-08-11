const express = require('express');
const {userLogin, userRegister} = require('../controllers/userController')

const validateMiddle = require('../middlewares/validationMiddle')

const router = express.Router();

router.post('/login', userLogin);

router.post('/signup',validateMiddle, userRegister);

module.exports = router;