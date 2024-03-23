require('dotenv').config(); 
const User=require('../Model/userModel');
var jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const Hotel=require('../Model/hotelModel');
const response=require('../Middleware/Response');



exports.login= async function(req,res){
    try{
    if(!req.body.client_id||req.body.client_id=='') throw "Client ID is required";
    if(!req.body.password||req.body.password=='') throw  "Password is required";
    
    const user= await User.findOne({client_id:req.body.client_id});
    if(!user) throw  'User not found';
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) throw 'Invalid Password';
    const token =  await jwt.sign({userId:user._id,user_role:user.role}, process.env.SECRET_KEY, { expiresIn: '7d' });
    user.token=token;
    response.success(req,res,"login successfull",user);
    }catch(error){
        return response.failure(req,res,error.message||error);
    }
}

exports.admin=async function (req, res){
    
    const { customAlphabet } = await import('nanoid');
    const alphabet = '0123456789';
    const generateClientId = customAlphabet(alphabet, 8);
    const uniqueClientId = generateClientId();
    const hashedPassword = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

  User.create({
    email : req.body.email ,
    password:hashedPassword,
    client_id:uniqueClientId,
    role:"admin"
  }).then((user)=>{
    response.success(req,res,"admin added successfully ",user);

  }).catch((error)=>{
    return response.failure(req,res,error.message||error);

  });

}

exports.addClient= async function(req,res){
    try{
     if(!req.body.email||req.body.eamil=='') throw "Email is required";
     if(!req.body.hotel_id||req.body.hotel_id=='') throw "Hotel id is required";
     if(!req.body.password || req.body.password == '') throw "Password is required";

     const { customAlphabet } = await import('nanoid');
     const alphabet = '0123456789';
     const generateClientId = customAlphabet(alphabet, 8);
     const uniqueClientId = generateClientId();
     const hashedPassword = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

     await User.create({
           hotel_id:req.body.hotel_id,
           email : req.body.email ,
           password:hashedPassword,
           client_id:uniqueClientId,
           role:"client"
     }).then((user)=>{
        response.success(req,res,"client added successfully ",user);

     }).catch((error)=>{
        return response.failure(req,res,error.message||error);

     })  

    }catch(error){
        return response.failure(req,res,error.message||error);
    }
}


exports.addHotel= async function(req,res){
    try{
        if(!req.body.name||req.body.name=='') throw "Name is required";
        if(!req.body.contact_no|| req.body.contact_no=='') throw  "Contact number is required";
        if(!req.body.address || req.body.address=='') throw "Address is required";
        if(!req.body.city||req.body.city=='') throw "City is required";
        if(!req.body.state|| req.body.state=='') throw "State is required";

        await Hotel.create({
            name : req.body.name ,
            contact_no : req.body.contact_no ,
            address : req.body.address ,
            city : req.body.city ,
            state : req.body.state
        }).then((user)=>{
          return  response.success(req,res,"Hotel added successfully ",user);

        }).catch((error)=>{
            return response.failure(req,res,error.message||error);

        })

    }catch(error){
        return response.failure(req,res,error.message||error);

    }
}