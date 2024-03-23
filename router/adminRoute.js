const express = require('express');
const router = express.Router();
const AuthController=require('../Controller/AuthController');
const admin= require('../Middleware/verifyAdmin');
const main=require('../Middleware/verifyToken');

router.post('/addclient',admin.verifyAdmin,AuthController.addClient);
router.post('/addhotel',admin.verifyAdmin,AuthController.addHotel);


module.exports = router;
