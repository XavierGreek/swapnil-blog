const express=require('express');
const blogpost=require('./blogpost');
const mongoose=require('mongoose');
const Login=require('../models/loginschema');
const router=express.Router();

mongoose.connect("mongodb://localhost:27017/blog",{ useNewUrlParser: true,useUnifiedTopology: true });
router.get('/',function(req,res){
  res.render('login');
})

router.post('/',async function(req,res)
{
  var username=req.body.username;
  var password=req.body.password;
  var logins=await Login.find({});
  logins.forEach(function(login)
  {
    var userName=login.username;
    var userPassword=login.password;
    if(userName==username&&password==userPassword)
  {   
  res.redirect('/blogpost/compose');
  }
  else
  {
       res.render('login');
  }
  });
  
})
module.exports= router