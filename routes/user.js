const express = require('express');
const user = require('../models/user');

const router = express.Router();
const { createUser } = require('C:/Users/Camillo/Documents/First_FullStack_Project/controllers/user.js')

router.post('/create-user', createUser);

module.exports = router;