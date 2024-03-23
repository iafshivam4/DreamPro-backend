const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  client_id: { type: String, index: true ,unique:true}, 
  email: { type: String, index: true },
  hotel_id: { type: String, index: true },
  password: String,
  role:String,//admin or user
  is_blocked: {type:Number,default:0} //1-Blocked  0-Not Blocked
});

module.exports = mongoose.model('User', userSchema);
