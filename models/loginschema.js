const mongoose=require('mongoose')
const blogSchema= new mongoose.Schema({
     username:'string',
     password:'string'
   });
module.exports=mongoose.model("login",blogSchema);