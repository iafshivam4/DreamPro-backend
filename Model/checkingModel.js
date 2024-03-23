const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const checkingSchema = new Schema({
   hotel_id:String,
   room_id:String,
   status: { type : String , default : 'checked-in' }, // checked-out | checked-in 
   Payment:Number,
   guest:[{
       name:String,
       id:String
   }],
   checkIn_date: { type: Date, default: Date.now },
   checkOut_date:Date
});

module.exports = mongoose.model('Checking', checkingSchema);
