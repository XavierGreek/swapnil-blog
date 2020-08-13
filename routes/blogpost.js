const express=require('express');
const Blogpost = require('./../models/dbschema');
const router=express.Router();
router.get('/compose',function(req,res)
{
 res.render('compose');
});
router.post('/compose',function(req,res)
{
  var blogpost=new Blogpost({
   Image:req.body.postImage,    
   Title:req.body.postTitle,
   Data:req.body.postData
 });
 blogpost.save();
 res.redirect('/');
});

router.get('/error',function(req,res)
{
  res.render('error');
});
router.get('/dberror',function(req,res)
{
  res.render('error');
})
module.exports= router