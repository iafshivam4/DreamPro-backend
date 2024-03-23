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

mongoose.connect('mongodb://localhost:27017/dreamproject')
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
app.get('/',(req,res)=>{
  console.log("hello");
  res.sendFile(__dirname + '/views/index.html');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
