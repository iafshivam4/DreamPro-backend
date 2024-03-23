const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const roomSchema = new Schema({
   hotel_id:{type:String, index: true },
   room_number:String,
   status: { type : String , default : "available" } , // available / occupied  / cleaning / maintenance
   price : Number ,
   capacity : Number   
});

module.exports = mongoose.model('Room', roomSchema);
