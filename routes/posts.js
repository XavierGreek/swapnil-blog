const express=require('express');
const Blogpost = require('./../models/dbschema');
const router=express.Router();
router.get('/:postName',function(req,res)
{
//   var posts = await Blogpost.find({});
//   posts.forEach(function(post){
//     var postTitle=_.lowerCase(post.Title);
//     console.log(post.Title);
//     var postName=_.lowerCase(req.params.postName);
//     if(postTitle==postName)
//   {
//    res.render('post',{
//      postTitle:post.Title,
//      postData:post.Data
//    });
//   }  
//   });
const requestedPostName = req.params.postName;

  Blogpost.findOne({Title: requestedPostName}, function(err, post){
    if(err)
    {
      res.redirect("/");
    }
    else
    {
    res.render("post", {
      Image:post.Image,
      Title: post.Title,
      Data: post.Data
    });
  };
  });
});
module.exports= router