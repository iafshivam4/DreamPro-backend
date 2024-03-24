const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const router= require('./router/userRoute');
const swaggerUi = require('swagger-ui-express'); 
const { specs } = require('./swagger'); 

const admin =require('./router/adminRoute');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT ;

mongoose.connect('mongodb+srv://shivamtiwarixtr:DreamProject@cluster0.urbzuhw.mongodb.net/DreamPro')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use('/api', router);
app.use('/admin', admin);
app.get('/',function(req,res){
  console.log("Your project is runnng");
  res.send("working");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
