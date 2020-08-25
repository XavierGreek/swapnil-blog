//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ =require('lodash');
const homeStartingContent = "";
const aboutContent = "";
const contactContent = "";
const mongoose=require('mongoose');
const app = express();
const post = require('./routes/blogpost');
const login= require('./routes/login');
const posts=require('./routes/posts');
const Blogpost=require('./models/dbschema');
const Login=require('./models/loginschema');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb+srv://swapnil-rawat:blogpost@database.kdl58.mongodb.net/blog?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true });


app.get('/',async function(req,res)
{
  var posts =await Blogpost.find({});
 res.render('home',{
   post:homeStartingContent,
   posts:posts

});
});


app.get('/contact',function(req,res)
{
 res.render('contact',{contact:contactContent});
});

app.get('/about',function(req,res)
{
 res.render('about',{about:aboutContent});
});

app.use('/blogpost',post);
app.use('/posts',posts);
app.use('/login',login);
app.get('/admin',async function(req,res){
  var login=await Login.find();
})

let port = process.env.PORT;
if (port == null || port==""){
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port 3000");
});
