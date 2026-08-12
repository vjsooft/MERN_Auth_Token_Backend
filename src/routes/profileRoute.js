const express = require('express');
const getProfile = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');
// const validateMiddle = require('../middlewares/validationMiddle')

const router = express.Router();
router.get("/profile/:id", authMiddleware, getProfile);

module.exports = router;