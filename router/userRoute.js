const express = require('express');
const router = express.Router();
const AuthController=require('../Controller/AuthController');

router.get('/login',AuthController.login);
router.post('/admin',AuthController.admin);

module.exports = router;
