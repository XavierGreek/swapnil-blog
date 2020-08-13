const mongoose=require('mongoose')
const blogSchema= new mongoose.Schema({
     Image:'string',
     Title:'string',
     Data:'string'
   });
   
module.exports=mongoose.model("Blogpost",blogSchema);