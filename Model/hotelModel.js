const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const hotelSchema = new Schema({
   name:String,
   contact_no:Number,
   address:String,
   city:String,
   state:String,
   is_blocked:Number,
   create_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Hotel', hotelSchema);
